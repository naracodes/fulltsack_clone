class Api::PortfoDataController < ApplicationController
    def index
        @current_user = current_user || User.find(46)
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
            # debugger
            @all_data = PortfoDatum.where(user_id: @current_user.id).last(79)
            render :index
        elsif new_day
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
            render :index
        elsif ((last_update_lapsed > five_min) && !day_ended)
            # debugger
            last_label = Time.parse(@last_portfo_data.label)
            # (last_update_lapsed / five_min).floor.times do
            until last_label == label_now
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (last_label += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find(46).cash_balance
                })
            end
        else
            render :index
        end

    end
end