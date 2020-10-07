class UpdateWatchlists4 < ActiveRecord::Migration[5.2]
  def change
    add_column :watchlists, :prev_close, :float
  end
end
