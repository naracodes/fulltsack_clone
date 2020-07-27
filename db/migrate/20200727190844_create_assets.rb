class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :ticker, null: false
      t.string :asset_name, mull: false

      t.timestamps
    end
    add_index :assets, :ticker, unique: true
  end
end
