# == Schema Information
#
# Table name: transactions
#
#  id                 :bigint           not null, primary key
#  user_id            :integer          not null
#  asset_id           :integer          not null
#  transaction_type   :string           not null
#  transaction_amount :float            not null
#  quantity           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Transaction < ApplicationRecord
    validates :user_id, :asset_id, :transaction_type, :transaction_amount, :quantity, presence: true
end
