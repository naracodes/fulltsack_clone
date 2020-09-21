class Api::HistoriesController < ApplicationController
    def index
        # @histories = History.where(user_id: current_user.id)
        @histories = History.where(user_id: 46)
        render :index
    end

    def show
        @current_user = current_user
        @current_user.cash_balance
    end

    def create
        params[:transaction_amount] = (params[:quantity].to_i * params[:cost_per_share].to_i).to_s
        History.create(history_params)
    end

    private
    def history_params
        params.permit(:user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share)
    end
end
