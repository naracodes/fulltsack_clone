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
        @current_user = current_user
        @transaction = Transaction.new(transaction_params)

        case @transaction.type
        when "Deposit"
            @current_user.buying_power += @transaction.transaction_amount
        when "Withdraw"
            @current_user.buying_power -= @transaction.transaction_amount
        when "Buy"
            @transaction.amount = transaction.quantity * transaction.cost_per_share
            
        when "Sell"
            
        else
            "Not a valid transaction type"
        end
    end

    private
    def transaction_params
        params.permit(:user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share)
    end
end
