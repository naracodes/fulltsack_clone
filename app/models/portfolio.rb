# == Schema Information
#
# Table name: portfolios
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  balance    :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  portfolio  :float
#
class Portfolio < ApplicationRecord
    validates :user_id, :balance, presence: true
end
