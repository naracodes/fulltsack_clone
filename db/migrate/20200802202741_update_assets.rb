class UpdateAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :assets, :latest_price, :float
  end
end
