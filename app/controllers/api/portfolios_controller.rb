class Api::PortfoliosController < ApplicationController
    def index
        # @current_user_id = current_user ? current_user.id : 46
        @current_user = current_user
        @portfolio_data = Portfolio.where(user_id: @current_user.id).last
        if @portfolio_data
            render :index
        else
            # Portfolio.create({
            #    user_id: @current_user.id,
            #    balance: 1000000,
            #})
            @portfolio_data = Portfolio.where(user_id: @current_user.id).last
            render :index
        end
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
        params.permit(:user_id, :balance)
    end

end
