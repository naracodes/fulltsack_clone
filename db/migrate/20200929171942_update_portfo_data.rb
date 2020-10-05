class UpdatePortfoData < ActiveRecord::Migration[5.2]
  def change
    remove_column :portfo_data, :date
    add_column :portfo_data, :date, :string
  end
end
