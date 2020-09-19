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
class User < ApplicationRecord
    # FIG VAPER
    validates :email, :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 10, allow_nil: true }
    attr_reader :password

    after_initialize :ensure_session_token

    # has_one :watchlist
    has_many :watchlist_items,
        foreign_key: :user_id,
        class_name: :Watchlist

    has_many :transaction_records,
        foreign_key: :user_id,
        class_name: :Transaction

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
        price_info = Hash.new(0)
        price_info["Buy"] = self.transaction_records.where(transaction_type: "Buy")
        price_info["Sell"] = self.transaction_records.where(transaction_type: "Sell")
        
        if ticker
            
        else
            
        end
    end
    
    def avg_stock_price(ticker)
        avg_price = Hash.new()
        self.transaction_records.where(transaction_type: "Buy", ticker: ticker)
    end

    # has_many :watched_assets,
    #     through: :watchlist_items,
    #     source: :asset

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

    def buying_power
        # deposit and withd bonus feature
        # buy and sell
        # FIFO - chronological :created_at - things to do later maybe?
        cash_balance = Transaction.where(transaction_type: "Deposit", user_id: self.id)
        last_position = Transaction.where(transaction_type: "Deposit", user_id: self.id).pluck(:transaction_amount)
    end
end
