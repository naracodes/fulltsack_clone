class UpdateWatchlists2 < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :latest_price, :float
  end
end
