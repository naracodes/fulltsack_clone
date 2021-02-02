class Api::PortfoDataController < ApplicationController
    def index
        portfo_data_params = params
        range = params["range"].upcase
        @current_user = current_user
        @data
        if range == "1D"
            @data = PortfoDatum.where(created_at: Time.current.all_day, user_id: 96)
        elsif range == "1W"
            @data = PortfoDatum.where('created_at >= ?', 1.week.ago, user_id: 96)
        elsif range == "1M"
            @data = PortfoDatum.where('created_at >= ?', 1.month.ago, user_id: 96)
        elsif range == "3M"
            @data = PortfoDatum.where('created_at >= ?', 3.months.ago, user_id: 96, label: "3:55PM")
        elsif range == "1Y"
            @data = PortfoDatum.where('created_at >= ?', 12.months.ago, user_id: 96, label: "3:55PM")
        elsif range == "ALL"
            @data = PortfoDatum.where("DATE_PART('dow', created_at::date)=?", 2).where(label: "3:55 PM")
        end
        render json: { data: @data }
    end

    private
    def portfo_data_params
        params.permit(:range)
    end
end