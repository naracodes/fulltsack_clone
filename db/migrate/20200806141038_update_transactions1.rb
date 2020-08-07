class UpdateTransactions1 < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :quantity
    add_column :transactions, :quantity, :integer
  end
end
