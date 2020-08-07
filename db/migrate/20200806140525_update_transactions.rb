class UpdateTransactions < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :asset_id
    add_column :transactions, :asset_id, :integer
    add_column :transactions, :ticker, :string, null: false
  end
end
