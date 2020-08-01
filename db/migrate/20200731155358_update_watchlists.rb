class UpdateWatchlists < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :asset_id
    add_column :watchlists, :asset_id, :integer
    add_column :watchlists, :ticker, :string, null: false
  end
end
