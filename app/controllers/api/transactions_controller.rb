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
        @records = []
        @current_user_id = params[:user_id]

        if ["Deposit", "Withdraw"].include?(params[:transaction_type])
            @bank_trans = Transaction.new(transaction_params)
            if @bank_trans.save
                case params[:transaction_type]
                when "Deposit"
                    last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                    @portfo_record = Portfolio.create({
                        user_id: @current_user_id,
                        balance: last_cash_balance += @bank_trans.transaction_amount,
                    })
                    render json: { data: @portfo_record }    
                when  "Withdraw"
                    last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                    @portfo_record = Portfolio.create({
                        user_id: @current_user_id,
                        balance: last_cash_balance -= @bank_trans.transaction_amount
                    })
                    render json: { data: @portfo_record }
                else
                    "Not a valid trans type"                    
                end
            end
        else
            debugger
            last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
            params[:transaction_amount] = (params[:quantity].to_i * params[:cost_per_share].to_i).to_s

            case params[:transaction_type]
            when "Buy"
                debugger
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance -= params[:transaction_amount]
                })
            when "Sell"
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance += params[:transaction_amount]
                })
            else
                "Not a valid transaction type"
            end

            if @transaction_qt > 1
                params[:quantity] = "1"
                @transaction_qt.times do
                    @records << Transaction.new(transaction_params)
                end
            else
                @records << Transaction.new(transaction_params)
            end

            @records.dice_and_save
            debugger
        end
    end

    def dice_and_save
        result = true
        self.each do |transaction_obj|
            debugger
            if !transaction_obj.save
                result = false
            end
        end
        result
    end

    private
    def transaction_params
        params.permit(:user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share)
    end
end


    # def dice_and_save_delete
    #     if @transaction_record.save
    #         case @transaction_record.transaction_type
    #         when "Buy"
    #             last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
    #             @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
                
    #             Portfolio.create({
    #                 user_id: @current_user_id,
    #                 balance: last_cash_balance -= @transaction_record.transaction_amount,
    #                 date: DateTime.now()
    #             })

    #             #stocks owned
    #             @user_holdings = Transaction.where(user_id: @current_user_id, transaction_type: "Buy")
    #             @portfo_snapshot = Hash.new()
    #             @user_holdings.pluck(:ticker).uniq.each do |holding|
    #                 average_cost = @user_holdings.where()
    #                 @portfo_snapshot
    #             end
                
    #             render json: { owned: @user_holdings, transaction: @transaction_record }
                
    #         when "Sell"
    #             @transaction_record.update(transaction_amount: @transaction_record.quantity * @transaction_record.cost_per_share)
    #         else
    #             "Not a valid transaction type"
    #         end
    #     end
    # end