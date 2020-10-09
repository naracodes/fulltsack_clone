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
require 'test_helper'

class PortfolioTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
