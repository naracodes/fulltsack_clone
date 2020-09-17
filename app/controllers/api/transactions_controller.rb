require 'date'

class Api::TransactionsController < ApplicationController

    def index
        # @transactions = Transaction.where('user_id = ?', current_user.id)
        @transactions = Transaction.all
        render :index
    end

    def show
        @transaction = Transaction.find(params[:id])
        render :show
    end

    def create
        @transaction_record = Transaction.new(transaction_params)
        @current_user_id = @transaction_record.user_id
        debugger
        if @transaction_record.save
            debugger
            case @transaction_record.transaction_type
            when "Deposit"
                last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                @portfo_record = Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance += @transaction_record.transaction_amount,
                    date: DateTime.now()
                })
                debugger
                render json: { data: @portfo_record }
                # @current_user.buying_power += @transaction.transaction_amount
            when "Withdraw"
                last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance -= @transaction_record.transaction_amount,
                    date: DateTime.now()
                })
                # @current_user.buying_power -= @transaction.transaction_amount
            when "Buy"
                last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
                
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance -= @transaction_record.transaction_amount,
                    date: DateTime.now()
                })

                #stocks owned
                @user_holdings = Transaction.where(user_id: @current_user_id, transaction_type: "Buy")
                render json: { data: @user_holdings }
                
            when "Sell"
                @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
            else
                "Not a valid transaction type"
            end

            # debugger
            # @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
            # render json: { data: @transaction_record }
        end

    end

    private
    def transaction_params
        params.permit(:user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share)
    end
end


    # case @transaction_record.transaction_type
    # when "Deposit"
    #     last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
    #     Portfolio.create({
    #         user_id: @current_user.id,
    #         balance: last_cash_balance += @transaction_record.transaction_amount,
    #         date: DateTime.now()
    #     })
    #     # @current_user.buying_power += @transaction.transaction_amount
    # when "Withdraw"
    #     last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
    #     Portfolio.create({
    #         user_id: @current_user.id,
    #         balance: last_cash_balance -= @transaction_record.transaction_amount,
    #         date: DateTime.now()
    #     })
    #     # @current_user.buying_power -= @transaction.transaction_amount
    # when "Buy"
    #     last_cash_balance = Portfolio.where(user_id: @current_user.id).last.balance
    #     @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
        
    #     Portfolio.create({
    #         user_id: @current_user.id,
    #         balance: last_cash_balance -= @transaction_record.transaction_amount,
    #         date: DateTime.now()
    #     })

    #     #stocks owned
    #     @user_holdings = Transaction.where(user_id: @current_user.id, transaction_type: "Buy")
    #     render json: { data: @user_holdings }
        
    # when "Sell"
    #     @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
    # else
    #     "Not a valid transaction type"
    # end