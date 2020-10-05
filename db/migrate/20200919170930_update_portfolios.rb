class UpdatePortfolios < ActiveRecord::Migration[5.2]
  def change
    remove_column :portfolios, :date
  end
end
