class Api::HoldingsController < ApplicationController
    def index
        @current_user = current_user
        if Transaction.where(user_id: @current_user.id).count < 2
            render json: { holdings: {} }
        else
            @user_holdings = @current_user.holdings
            render json: { holdings: @user_holdings }
        end
    end
end
