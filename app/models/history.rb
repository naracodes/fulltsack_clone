# == Schema Information
#
# Table name: histories
#
#  id                 :bigint           not null, primary key
#  user_id            :integer
#  ticker             :string
#  transaction_type   :string
#  transaction_amount :float
#  quantity           :integer
#  cost_per_share     :float
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class History < ApplicationRecord
end
