class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.integer :user_id
      t.string :ticker
      t.string :transaction_type
      t.float :transaction_amount
      t.integer :quantity
      t.float :cost_per_share

      t.timestamps
    end
    add_index :histories, :user_id
  end
end
