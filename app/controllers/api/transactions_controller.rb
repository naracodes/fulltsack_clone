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
        @transaction_qt = transaction_params["quantity"].to_i
        @mult_records = []
        @current_user_id = @transaction_record.user_id

        if [].includes?(params[:transaction_type] )
            
        end

        if @transaction_qt > 1
            params[:quantity] = 1
            @transaction_qt.times do
                @mult_records << Transaction.new(transaction_params)
            end
        else
            @transaction_record = Transaction.new(transaction_params)
        end

    end

    def save
        if self.is_a?(Array)
            if self.all? { |transaction| transaction.save }
                self.each do |transaction|

                end
            end
        else
            if @transaction_record.save
                case @transaction_record.transaction_type
                when "Deposit"
                    last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                    @portfo_record = Portfolio.create({
                        user_id: @current_user_id,
                        balance: last_cash_balance += @transaction_record.transaction_amount,
                        date: DateTime.now()
                    })
                    render json: { data: @portfo_record }
                when "Withdraw"
                    last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                    Portfolio.create({
                        user_id: @current_user_id,
                        balance: last_cash_balance -= @transaction_record.transaction_amount,
                        date: DateTime.now()
                    })
                    render json: { data: @portfo_record }
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
                    @portfo_snapshot = Hash.new()
                    @user_holdings.pluck(:ticker).uniq.each do |holding|
                        average_cost = @user_holdings.where()
                        @portfo_snapshot
                    end
                    
                    render json: { owned: @user_holdings, transaction: @transaction_record }
                    
                when "Sell"
                    @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
                else
                    "Not a valid transaction type"
                end
            end
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