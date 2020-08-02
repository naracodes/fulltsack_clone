class UpdateWatchlists3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :user_id
    add_column :watchlists, :email, :string
    add_column :watchlists, :user_id, :integer
  end
end
