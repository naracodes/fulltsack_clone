class UpdateWatchlists1 < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :asset_name, :string
  end
end
