class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :asset_id, null: false
      t.string :transaction_type, null: false
      t.float :transaction_amount, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
    
    add_index :transactions, :user_id
    add_index :transactions, :asset_id
  end
end
