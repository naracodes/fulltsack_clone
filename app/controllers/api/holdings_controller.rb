class Api::HoldingsController < ApplicationController
    def index
        @current_user = current_user || User.find(46)
        @user_holdings = @current_user.holdings
        render json: { holdings: @user_holdings }
    end
end
