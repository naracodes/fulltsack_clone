class Api::PortfoDataController < ApplicationController
    def index
        @current_user = current_user || User.find(46)
        @all_data = PortfoData.where(user_id: @current_user.id)
        render json: { data: @all_data}
    end

    def create
        # t.strftime('%I:%M %p')
        @last_portfo_data = PortfoData.last
        today = Time.now.strftime("%Y-%m-%d")
        market_open = "09:30 AM"
        @current_user = current_user || User.find(46)

        new_day = @last_portfo_data.create_at.strftime("%Y-%m-%d") < today
        if new_day
            today_open = Time.parse("9:30 AM")
            @first_of_day = PortfoData.create({
                date: today,
                label: market_open,
                cash_balance: current_user.cash_balance || User.find(46).cash_balance
            })
            until today_open.strftime("%I:%M %p") == "04:30 PM"
                PortfoData.create({
                    user_id: @current_user.id
                    date: today,
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find(46).cash_balance
                })
            end
            # create reset, weekend/holday instance variable methods
            # today_open.reset!
            today_open = Time.parse("9:30 AM")
        else
        end
    end
end
