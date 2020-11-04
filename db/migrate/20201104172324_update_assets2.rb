class UpdateAssets2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :assets, :latest_price
  end
end
