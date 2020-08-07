# == Schema Information
#
# Table name: watchlists
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  asset_id     :integer
#  ticker       :string           not null
#  asset_name   :string
#  latest_price :float
#  email        :string
#  user_id      :integer
#
require 'test_helper'

class WatchlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
