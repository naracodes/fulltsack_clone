# == Schema Information
#
# Table name: assets
#
#  id           :bigint           not null, primary key
#  ticker       :string           not null
#  asset_name   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  latest_price :float
#
class Asset < ApplicationRecord
    validates :ticker, :asset_name, presence: true, uniqueness: true
end
