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
require 'test_helper'

class WatchlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
