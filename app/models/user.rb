# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  firstName       :string           not null
#  lastName        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'rufus-scheduler'

class User < ApplicationRecord
    require 'rufus-scheduler'
    load "#{Rails.root}/config/initializers/scheduler.rb"

    # FIG VAPER
    validates :email, :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 10, allow_nil: true }
    attr_reader :password

    after_initialize :ensure_session_token

    has_many :watchlist_items,
        foreign_key: :user_id,
        class_name: :Watchlist

    has_many :transaction_records,
        foreign_key: :user_id,
        class_name: :Transaction


    def name
        self.firstName
    end

    def record
        scheduler = Rufus::Scheduler.new
        @current_user_id = self.id
        @current_user = User.find(@current_user_id)
        scheduler.every '5s' do
            puts Time.now
            PortfoDatum.create!({
                user_id: @current_user_id,
                date: Time.now,
                holdings_snapshot: @current_user.holdings,
                label: Time.now.strftime("%I:%M %p"),
                cash_balance: 1000000
            })
        end
    end

    def holdings_between(prev, cur, initial=false)
        # @current_user = current_user ? current_user : User.find(46)
        @current_user = User.find_by(firstName: "Demo")

        holdings_snapshot = initial ? Hash.new(0) : @current_user.holdings
        buys = self.transaction_records.where(transaction_type: "Buy", created_at: prev..cur).to_a
        sells = self.transaction_records.where(transaction_type: "Sell", created_at: prev..cur).to_a
        buys = buys.count === 1 ? [buys] : buys
        sells = sells.count == 1 ? [sells] : sells
        if buys[0]
            buys.each do |buy|
                holdings_snapshot[buy.ticker] += buy.quantity
            end
        end

        if sells[0]
            sells.each do |sell|
                holdings_snapshot[sell.ticker] -= sell.quantity
            end
        end
        holdings_snapshot

    end

    def holdings(ticker = nil)
        holding_info = Hash.new(0)
        self.transaction_records.where(transaction_type: "Buy").each do |buy| 
            holding_info[buy.ticker] += buy.quantity
        end

        self.transaction_records.where(transaction_type: "Sell").each do |sell|
            holding_info[sell.ticker] -= sell.quantity
        end

        if ticker
            holding_info[ticker]
        else
            holding_info
        end
    end

    def avg_price(ticker = nil)
        holdings = self.holdings
        price_info = Hash.new(0)
        avg_price = 0;
        
        holdings.keys.each do |ticker|
            num_sold = self.transaction_records.where(transaction_type: "Sell", ticker: ticker).count
            
            sum = self.transaction_records.where(transaction_type: "Buy", ticker: ticker).offset(num_sold).pluck(:cost_per_share).inject(:+)
            count = holdings[ticker]
            price_info[ticker] = sum / count
        end

        if ticker
            price_info[ticker]
        else
            price_info
        end
    end

    def cash_balance
        Portfolio.where(user_id: self.id).last.balance
    end
    
    def last_cash_balance
        Portfolio.where(user_id: self.id).last.balance
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)    
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
