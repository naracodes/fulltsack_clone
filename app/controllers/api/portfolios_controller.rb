class Api::PortfoliosController < ApplicationController
    def index
        @porfolio_data = Portfolio.where('user_id = ?', current_user.id)
        render :index
    end

    def show
    end
    
    def create
        @portolio_record = Portfolio.new(portfolio_params)
        if @portolio_record.save
            
        end
    end

    private
    def portfolio_params
        params.permit(:user_id, :balance, :date)
    end

end
