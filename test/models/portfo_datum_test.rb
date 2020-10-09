# == Schema Information
#
# Table name: portfo_data
#
#  id                :bigint           not null, primary key
#  user_id           :integer
#  label             :string
#  cash_balance      :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  date              :string
#  holdings_snapshot :json
#
require 'test_helper'

class PortfoDatumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
