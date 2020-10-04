# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'iex-ruby-client'
require 'date'

# Asset.destroy_all
# Watchlist.destroy_all
# Transaction.destroy_all

IEX::Api.configure do |config|
    config.publishable_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
    config.endpoint = 'https://sandbox.iexapis.com/v1'
end

client = IEX::Api::Client.new(
  publishable_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
  endpoint: 'https://sandbox.iexapis.com/v1'
)

# # -------
demo_stocks = ['F', 'GE', 'AAL', 'DIS', 'AAPL', 'DAL', 'MSFT', 'TSLA', 'CCL', 'GPRO', 'ACB', 'AMZN', 'LRCX', 'REAL', 'CPRI']

# demo_stocks.each do |demo_stock|
#     stock = client.quote(demo_stock)
#     Asset.create({
#         ticker: stock.symbol,
#         asset_name: stock.company_name,
#         latest_price: stock.latest_price,
#         })
#     end
# # -------

# demo_watchlist_assets_46 = ['F', 'GE', 'AAL']
# demo_watchlist_assets_48 = ['LRCX', 'REAL', 'CPRI']

# demo_watchlist_assets_46.each do |demo_watchlist_asset|
#     stock = client.quote(demo_watchlist_asset)
#     Watchlist.create({
#         email: 'demo@demo.com',
#         ticker: demo_watchlist_asset,
#         asset_id: Asset.find_by(ticker: demo_watchlist_asset).id,
#         asset_name: Asset.find_by(ticker: demo_watchlist_asset).asset_name,
#         latest_price: stock.latest_price
#         })
# end

# demo_user = User.create({
#     email: 'demo@demo.com',
#     password: 'demopassworddemo',
#     id: 12345,
# })
    
# # demo_watchlist_assets_48.each do |demo_watchlist_asset|
# #     stock = client.quote(demo_watchlist_asset)
# #     Watchlist.create({
# #         user_id: 48,
# #         ticker: demo_watchlist_asset,
# #         asset_id: Asset.find_by(ticker: demo_watchlist_asset).id,
# #         asset_name: Asset.find_by(ticker: demo_watchlist_asset).asset_name,
# #         latest_price: stock.latest_price
# #     })
# # end

# Transaction.create({
#     user_id: 46,
#     asset_id: ,
#     transaction_type: "Deposit",
#     transaction_amount: 2000,
#     quantity: 1,
# })

# # BANK DEPOSIT
# Transaction.create({
#     user_id: 46,
#     asset_id: ,
#     transaction_type: "Deposit",
#     transaction_amount: 1000,
#     quantity: 1,
# })

# # BANK WITHDRAW
# Transaction.create({
#     user_id: 46,
#     asset_id: ,
#     transaction_type: "Withdraw",
#     transaction_amount: 500,
#     quantity: 1,
# })

# # BUY
# # WITHDRAW FROM CASH, CONVERT INTO STOCK

# transaction_types = ["Buy", "Sell"]
# stock_qt = [1, 2, 3]

# 7.times do
#     Transaction.create({
#         user_id: 46,
#         ticker: "GOOGL",
#         transaction_type: transaction_types.sample,
#         transaction_amount: 0,
#         quantity: stock_qt.sample,
#         cost_per_share: 250.00,
#     })
# end

# 7.times do
#     Transaction.create({
#         user_id: 46,
#         ticker: "FB",
#         transaction_type: transaction_types.sample,
#         transaction_amount: 0,
#         quantity: stock_qt.sample,
#         cost_per_share: 250.00,
#     })
# end

    # Transaction.create({
    #     user_id: 46,
    #     ticker: "GOOGL",
    #     transaction_type: "Buy",
    #     transaction_amount: 0,
    #     quantity: 2,
    #     cost_per_share: 100.00,
    # })

# # SELL
# # CONVERT INTO CASH AND DEPOSIT AS CASH
# Transaction.create({
#     user_id: 46,
#     ticker: ,
#     transaction_type: "Sell",
#     transaction_amount: ,
#     quantity: 2,
#     cost_per_share: 260.00,
# })

# 10.times do
#     Product.create({
#         name: Faker::CryptoCoin.coin_name,
#         decription: Faker::CryptoCoin.,
#         price: 
#     })
# end

# balance_init = 1000
# subtractor = (1..20).to_a

# 10.times do
#     Portfolio.create({
#         user_id: 46,
#         balance: balance_init -= subtractor.sample,
#         date: DateTime.now()
#     })
# end

# today = Time.now.strftime("%Y-%m-%d")
# market_open = "09:30 AM"
# today_open = Time.parse(market_open)
# @last_portfo_data = PortfoDatum.last ? @last_portfo_data.created_at.strftime("%Y-%m-%d") : today_open - (24 * 60 * 60)
# @current_user = User.find(46) # || current_user

# new_day = @last_portfo_data < today

# if new_day
#     PortfoDatum.create({
#         user_id: @current_user.id,
#         date: today,
#         label: market_open,
#         cash_balance: @current_user.cash_balance || User.find(46).cash_balance
#     })
#     until today_open.strftime("%I:%M %p") == "04:00 PM"
#         PortfoDatum.create({
#             user_id: @current_user.id,
#             date: today,
#             label: (today_open += (5 * 60)).strftime("%I:%M %p"),
#             cash_balance: @current_user.cash_balance || User.find(46).cash_balance
#         })
#     end
#     # create reset, weekend/holday instance variable methods
#     # today_open.reset!
#     today_open = Time.parse("9:30 AM")
# end

        @current_user = User.find(4)
        today = Time.now.strftime("%Y-%m-%d")
        todayDate = Time.now
        weekend = todayDate.saturday? || todayDate.sunday?
        market_open = "09:30 AM"
        day_ended = Time.now >= Time.parse("04:00 PM")
        five_min = 300

        @last_portfo_data = PortfoDatum.last
        
        @all_data = PortfoDatum.where(user_id: @current_user.id)

        new_day = @last_portfo_data ? @last_portfo_data.created_at.strftime("%Y-%m-%d") < today : true
        label_now = (Time.now <= Time.parse("04:00 PM") || !weekend) ? Time.now.strftime("%I:%M %p") : "04:00 PM"
        last_update_lapsed = @last_portfo_data ? Time.parse(label_now) - Time.parse(@last_portfo_data.label) : 0;


        if weekend
            @all_data = PortfoDatum.where(user_id: @current_user.id).last(79)
            render :index
        elsif new_day
            today_open = Time.parse("9:30 AM")
            @first_of_day = PortfoDatum.create({
                date: today,
                label: market_open,
                cash_balance: @current_user.cash_balance || User.find(4).cash_balance
            })
            until today_open.strftime("%I:%M %p") == label_now
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: @current_user.cash_balance || User.find(4).cash_balance
                })
            end
            # create reset, weekend/holday instance variable methods
            # today_open.reset!
            today_open = Time.parse("9:30 AM")
            render :index
        elsif ((last_update_lapsed > five_min) && !day_ended)
            last_label = Time.parse(@last_portfo_data.label)
            # (last_update_lapsed / five_min).floor.times do
            until last_label == label_now
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (last_label += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: @current_user.cash_balance || User.find(4).cash_balance
                })
            end
        else
            render :index
        end