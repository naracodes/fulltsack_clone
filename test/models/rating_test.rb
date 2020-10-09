# == Schema Information
#
# Table name: ratings
#
#  id                :bigint           not null, primary key
#  rating_buy        :integer
#  rating_ow         :integer
#  rating_hold       :integer
#  rating_uw         :integer
#  rating_sell       :integer
#  rating_none       :integer
#  rating_scale_mark :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  ticker            :string
#
require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
