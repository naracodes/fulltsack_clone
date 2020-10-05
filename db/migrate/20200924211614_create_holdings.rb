class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
