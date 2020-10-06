class Api::PortfoDataController < ApplicationController
    def index
        debugger
        @current_user = current_user || User.find(46)
        today = Time.now.strftime("%Y-%m-%d")
        today_open = Time.parse("9:30 AM")
        todayDate = Time.now
        weekend = todayDate.saturday? || todayDate.sunday?
        market_open = "09:30 AM"
        day_ended = Time.now >= Time.parse("04:00 PM")
        five_min = 300

        @first_trans_data = Transaction.where(user_id: @current_user.id).first
        @last_portfo_data = PortfoDatum.where(user_id: @current_user.id).last
        
        # @all_data = PortfoDatum.where(user_id: @current_user.id)

        new_day = @last_portfo_data ? @last_portfo_data.created_at.strftime("%Y-%m-%d") < today : true
        label_now = (Time.now <= Time.parse("04:00 PM") && !weekend) ? Time.now.strftime("%I:%M %p") : "04:00 PM"
        last_update_lapsed = @last_portfo_data ? Time.parse(label_now) - Time.parse(@last_portfo_data.label) : 0;
        debugger
        holdings_as_of_this_morning = @current_user.holdings_between(@first_trans_data.created_at, today_open, true)


        if weekend
            debugger
            @all_data = PortfoDatum.where(user_id: @current_user.id).last(79)
            render :index
        elsif new_day
            debugger
            @first_of_day = PortfoDatum.create({
                user_id: @current_user.id,
                date: today,
                holdings_snapshot: holdings_as_of_this_morning,
                label: market_open,
                cash_balance: current_user.cash_balance || User.find_by(firstName: "Demo").cash_balance,
            })
            until (Time.parse(label_now) - today_open) < five_min
                debugger
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    holdings_snapshot: @current_user.holdings_between(today_open, today_open + five_min),
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find_by(firstName: "Demo").cash_balance
                })
            end
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            today_open = Time.parse("9:30 AM")
            # debugger
            render :index
        elsif ((last_update_lapsed > five_min) && !day_ended)
            debugger
            last_label = Time.parse(@last_portfo_data.label)
            until (Time.parse(label_now) - last_label) < five_min
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    label: (last_label += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: current_user.cash_balance || User.find_by(firstName: "Demo").cash_balance
                })
            end
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            # debugger
            render :index
        else
            debugger
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            # debugger
            render :index
        end

    end
end