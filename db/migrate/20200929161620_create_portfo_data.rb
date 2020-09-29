class CreatePortfoData < ActiveRecord::Migration[5.2]
  def change
    create_table :portfo_data do |t|
      t.integer :user_id
      t.datetime :date
      t.string :label
      t.float :cash_balance

      t.timestamps
    end
  end
end
