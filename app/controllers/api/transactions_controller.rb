require 'date'

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
            last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
            Portfolio.create({
                user_id: @current_user.id,
                balance: last_cash_balance += @transaction.transaction_amount,
                date: DateTime.now()
            })
            # @current_user.buying_power += @transaction.transaction_amount
        when "Withdraw"
            last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
            Portfolio.create({
                user_id: @current_user.id,
                balance: last_cash_balance -= @transaction.transaction_amount,
                date: DateTime.now()
            })
            # @current_user.buying_power -= @transaction.transaction_amount
        when "Buy"
            last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
            # set transaction amount manually (also total cost)
            @transaction.transaction_amount = transaction.quantity * transaction.cost_per_share
            
            Portfolio.create({
                user_id: @current_user.id,
                balance: last_cash_balance -= @transaction.transaction_amount,
                date: DateTime.now()
            })

            #stocks owned
            
            
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
