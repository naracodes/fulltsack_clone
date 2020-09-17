class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.float :balance, null: false
      t.datetime :date, null: false


      t.timestamps
    end
    add_index :portfolios, :user_id
    add_index :portfolios, :date
  end
end
