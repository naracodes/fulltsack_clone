class UpdatePortfolios1 < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :portfolio, :float
  end
end
