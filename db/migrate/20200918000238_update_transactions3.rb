class UpdateTransactions3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :transaction_amount
    remove_column :transactions, :ticker
    add_column :transactions, :transaction_amount, :float
    add_column :transactions, :ticker, :string
  end
end
