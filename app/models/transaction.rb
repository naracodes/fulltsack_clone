# == Schema Information
#
# Table name: transactions
#
#  id                 :bigint           not null, primary key
#  user_id            :integer          not null
#  transaction_type   :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  asset_id           :integer
#  quantity           :integer
#  cost_per_share     :float
#  transaction_amount :float
#  ticker             :string
#
class Transaction < ApplicationRecord
    validates :user_id, :transaction_type, :transaction_amount, presence: true

    
    
end
