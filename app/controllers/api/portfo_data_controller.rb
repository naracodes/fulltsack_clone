class Api::PortfoDataController < ApplicationController
    def index
        @current_user = current_user
        today = Time.now.strftime("%Y-%m-%d")
        today_open = Time.parse("9:30 AM")
        todayDate = Time.now
        weekend = todayDate.saturday? || todayDate.sunday?
        market_open = "09:30 AM"
        day_ended = Time.now >= Time.parse("04:00 PM")
        five_min = 300
        @first_trans_data = Transaction.where(user_id: @current_user.id).first
        @last_portfo_data = PortfoDatum.where(user_id: @current_user.id).last
        new_user = (todayDate - @current_user.created_at < 600)
        debugger
        
        # @all_data = PortfoDatum.where(user_id: @current_user.id)

        new_day = @last_portfo_data ? @last_portfo_data.date < today : true
        label_now = (Time.now <= Time.parse("04:00 PM") && !weekend) ? Time.now.strftime("%I:%M %p") : "3:55 PM"
        last_update_lapsed = @last_portfo_data ? Time.parse(label_now) - Time.parse(@last_portfo_data.label) : 0;
        
        
        holdings_as_of_this_morning = @current_user.holdings_between(@first_trans_data.created_at, today_open, true)
        market_closed = (Time.now > Time.parse("4:00 PM")) || (Time.now < Time.parse("9:29 AM"))

        if (weekend || market_closed ) && !new_user
            debugger
            @all_data = PortfoDatum.where(user_id: @current_user.id).last(78)
            @all_data.each do |data|
                data.update(cash_balance: @current_user.cash_balance)
            end
            @last_label = Time.parse(@all_data.last.label)
            if (@all_data.length != 0) && (@last_label == "03:55 PM")
                render :index
            else
            until @last_label.strftime("%I:%M %p") == "03:55 PM"
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    holdings_snapshot: @current_user.holdings_between(today_open, today_open + five_min),
                    label: (@last_label += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: @current_user.cash_balance,
                })
            end
                @all_data = PortfoDatum.where(user_id: @current_user.id).last(78)
                render :index
            end
        elsif new_user
            debugger
            if weekend || market_closed
                @first_of_day = PortfoDatum.create({
                user_id: @current_user.id,
                date: today,
                holdings_snapshot: {},
                label: market_open,
                cash_balance: @current_user.cash_balance,
                })
                until PortfoDatum.last.label == "03:55 PM"
                    PortfoDatum.create({
                        user_id: @current_user.id,
                        date: today,
                        holdings_snapshot: {},
                        label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                        cash_balance: @current_user.cash_balance,
                    })
                end
                @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
                today_open = Time.parse("9:30 AM")
                render :index
            elsif new_day
                @first_of_day = PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    holdings_snapshot: holdings_as_of_this_morning,
                    label: market_open,
                    cash_balance: @current_user.cash_balance,
                })
                until (Time.parse(label_now) - today_open) < five_min
                    PortfoDatum.create({
                        user_id: @current_user.id,
                        date: today,
                        holdings_snapshot: @current_user.holdings_between(today_open, today_open + five_min),
                        label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                        cash_balance: @current_user.cash_balance,
                    })
                end
                @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
                today_open = Time.parse("9:30 AM")
                render :index
            end
        elsif new_day
            debugger
            @first_of_day = PortfoDatum.create({
                user_id: @current_user.id,
                date: today,
                holdings_snapshot: holdings_as_of_this_morning,
                label: market_open,
                cash_balance: @current_user.cash_balance,
            })
            until (Time.parse(label_now) - today_open) < five_min
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    holdings_snapshot: @current_user.holdings_between(today_open, today_open + five_min),
                    label: (today_open += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: @current_user.cash_balance,
                })
            end
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            today_open = Time.parse("9:30 AM")
            render :index
        elsif (last_update_lapsed >= five_min)
            last_label = Time.parse(@last_portfo_data.label)
            until (Time.parse(label_now) - last_label) < five_min
                PortfoDatum.create({
                    user_id: @current_user.id,
                    date: today,
                    holdings_snapshot: @current_user.holdings_between(today_open, today_open + five_min),
                    label: (last_label += (5 * 60)).strftime("%I:%M %p"),
                    cash_balance: @current_user.cash_balance,
                })
            end
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            render :index
        else
            @all_data = PortfoDatum.where(user_id: @current_user.id, date: today)
            render :index
        end

    end
end