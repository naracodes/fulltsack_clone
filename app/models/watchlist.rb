# == Schema Information
#
# Table name: watchlists
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  asset_id     :integer
#  ticker       :string           not null
#  asset_name   :string
#  latest_price :float
#  email        :string
#  user_id      :integer
#  prev_close   :float
#
class Watchlist < ApplicationRecord
    # why does this result in an NoMethodError?
    has_many :owners,
        foreign_key: :user_id,
        class_name: :User

    def order_by_ownership
        @current_user = current_user || User.find_by(firstName: "Demo")
        holdings = @current_user.holdings
        ordered = []

        self.each do |record|
            if holdings[record.ticker] > 0
                ordered.unshift(record)
            else
                ordered.push(record)
            end
        end
        ordered
    end

end

