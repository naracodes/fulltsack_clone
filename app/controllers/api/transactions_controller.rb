class Api::TransactionsController < ApplicationController

    def index
        @transactions = Transactions.where('user_id = ?', current_user.id)
        render :index
    end

    def show
        @transaction = Transaction.find(params[:id])
        render :show
    end

    def create
        
    end

    private
    def transaction_params
        params.permit(:user_id, :asset_id, :transaction_type, :transaction_amount, :quantity)
    end
end
