# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  asset_id   :integer
#  ticker     :string           not null
#  asset_name :string
#
class Watchlist < ApplicationRecord
    validates :user_id, :ticker, presence: true

    belongs_to :user

    has_many :assets,
        foreign_key: :ticker,
        class_name: :Asset
end
