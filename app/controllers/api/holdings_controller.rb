class Api::HoldingsController < ApplicationController
    def index
        @current_user_id = current_user ? current_user.id : 46
        @current_user = current_user ? current_user : User.find(46)
        @user_holdings = @current_user.holdings
        render json: { holdings: @user_holdings }
    end
end
