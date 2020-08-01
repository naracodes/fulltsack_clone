# == Schema Information
#
# Table name: assets
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  asset_name :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
