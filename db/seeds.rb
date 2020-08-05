# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'iex-ruby-client'

# Asset.destroy_all
# Watchlist.destroy_all

IEX::Api.configure do |config|
    config.publishable_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
    config.endpoint = 'https://sandbox.iexapis.com/v1'
end

client = IEX::Api::Client.new(
  publishable_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
  endpoint: 'https://sandbox.iexapis.com/v1'
)

# -------
demo_stocks = ['F', 'GE', 'AAL', 'DIS', 'AAPL', 'DAL', 'MSFT', 'TSLA', 'CCL', 'GPRO', 'ACB', 'AMZN', 'LRCX', 'REAL', 'CPRI']

demo_stocks.each do |demo_stock|
    stock = client.quote(demo_stock)
    Asset.create({
        ticker: stock.symbol,
        asset_name: stock.company_name,
        latest_price: stock.latest_price,
        })
    end
# -------

demo_watchlist_assets_46 = ['F', 'GE', 'AAL']
demo_watchlist_assets_48 = ['LRCX', 'REAL', 'CPRI']

demo_watchlist_assets_46.each do |demo_watchlist_asset|
    stock = client.quote(demo_watchlist_asset)
    Watchlist.create({
        user_id: 46,
        ticker: demo_watchlist_asset,
        asset_id: Asset.find_by(ticker: demo_watchlist_asset).id,
        asset_name: Asset.find_by(ticker: demo_watchlist_asset).asset_name,
        latest_price: stock.latest_price
        })
end
    
demo_watchlist_assets_48.each do |demo_watchlist_asset|
    stock = client.quote(demo_watchlist_asset)
    Watchlist.create({
        user_id: 48,
        ticker: demo_watchlist_asset,
        asset_id: Asset.find_by(ticker: demo_watchlist_asset).id,
        asset_name: Asset.find_by(ticker: demo_watchlist_asset).asset_name,
        latest_price: stock.latest_price
    })
end

Transaction.create({
    user_id: 46,
    asset_id: 2,
    transaction_type: "Deposit",
    transaction_amount: 2000,
    quantity: 1,
})

Transaction.create({
    user_id: 46,
    asset_id: 24,
    transaction_type: "Deposit",
    transaction_amount: 1000,
    quantity: 1,
})

Transaction.create({
    user_id: 46,
    asset_id: 20,
    transaction_type: "Withdraw",
    transaction_amount: 500,
    quantity: 1,
})


# 10.times do
#     Product.create({
#         name: Faker::CryptoCoin.coin_name,
#         decription: Faker::CryptoCoin.,
#         price: 
#     })
# end

