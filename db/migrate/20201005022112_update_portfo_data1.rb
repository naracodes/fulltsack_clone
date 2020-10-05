class UpdatePortfoData1 < ActiveRecord::Migration[5.2]
  def change
    add_column :portfo_data, :holdings_snapshot, :json, default: {}
  end
end
