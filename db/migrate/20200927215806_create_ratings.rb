class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :rating_buy
      t.integer :rating_ow
      t.integer :rating_hold
      t.integer :rating_uw
      t.integer :rating_sell
      t.integer :rating_none
      t.float :rating_scale_mark

      t.timestamps
    end
  end
end
