# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'iex-ruby-client'

Asset.destroy_all

IEX::Api.configure do |config|
    config.publishable_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
    config.endpoint = 'https://sandbox.iexapis.com/v1'
end

client = IEX::Api::Client.new(
  publishable_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
  endpoint: 'https://sandbox.iexapis.com/v1'
)

demo_stocks = ['F', 'GE', 'AAL', 'DIS', 'AAPL', 'DAL', 'MSFT', 'TSLA', 'CCL', 'GPRO', 'ACB', 'AMZN']

demo_stocks.each do |demo_stock|
    stock = client.quote(demo_stock)
    Asset.create({
        ticker: stock.symbol,
        asset_name: stock.company_name
    })
end

# 10.times do
#     Product.create({
#         name: Faker::CryptoCoin.coin_name,
#         decription: Faker::CryptoCoin.,
#         price: 
#     })
# end

