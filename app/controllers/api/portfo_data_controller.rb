class Api::PortfoDataController < ApplicationController
    def index
        @current_user = current_user || User.find(46)
        today = Time.now.strftime("%Y-%m-%d")
        market_open = "09:30 AM"

        @last_portfo_data = PortfoDatum.last
        
        @all_data = PortfoDatum.where(user_id: @current_user.id)

        new_day = @last_portfo_data ? @last_portfo_data.created_at.strftime("%Y-%m-%d") < today : true;
        label_now = Time.now.strftime("%I:%M %p")

        last_update_lapsed = Time.parse(label_now) - Time.parse(@last_portfo_data.label)
        five_min = 300
        # debugger
        if new_day
            # debugger
            today_open = Time.parse("9:30 AM")
            @first_of_day = PortfoDatum.create({
                date: today,
                label: market_open,
                cash_balance: current_user.cash_balance || User.find(46).cash_balance
            })
            until today_open.strftime("%I:%M %p") == label_now
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find(46).cash_balance
                })
            end
            # create reset, weekend/holday instance variable methods
            # today_open.reset!
            today_open = Time.parse("9:30 AM")
            # debugger
            render :index
        elsif last_update_lapsed > five_min
            (last_update_lapsed % five_min).times do
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find(46).cash_balance
                })
            end
        else
            # debugger
            render :index
        end

    end

#     def create
#         # t.strftime('%I:%M %p')
#         @last_portfo_data = PortfoDatum.last
#         today = Time.now.strftime("%Y-%m-%d")
#         market_open = "09:30 AM"
#         @current_user = current_user || User.find(46)

#         new_day = @last_portfo_data.create_at.strftime("%Y-%m-%d") < today
#         if new_day
#             today_open = Time.parse("9:30 AM")
#             @first_of_day = PortfoDatum.create({
#                 date: today,
#                 label: market_open,
#                 cash_balance: current_user.cash_balance || User.find(46).cash_balance
#             })
#             until today_open.strftime("%I:%M %p") == "04:00 PM"
#                 PortfoDatum.create({
#                     user_id: @current_user.id,
#                     date: today,
#                     label: (today_open += (5 * 60)).strftime("%I:%M %p"),
#                     cash_balance: current_user.cash_balance || User.find(46).cash_balance
#                 })
#             end
#             # create reset, weekend/holday instance variable methods
#             # today_open.reset!
#             today_open = Time.parse("9:30 AM")
#             render :index
#         else
#             render :index
#         end
#     end
# end
end