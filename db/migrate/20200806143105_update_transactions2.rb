class UpdateTransactions2 < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :cost_per_share, :float
  end
end
