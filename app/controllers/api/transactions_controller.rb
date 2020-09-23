class Api::TransactionsController < ApplicationController

    def create
        @transaction_qt = transaction_params["quantity"].to_i
        @records = []
        @current_user_id = params[:user_id]

        if ["Deposit", "Withdraw"].include?(params[:transaction_type])
            @bank_trans = Transaction.new(transaction_params)
            if @bank_trans.save
                case params[:transaction_type]
                when "Deposit"
                    last_cash_balance = !Portfolio.where(user_id: @current_user_id).empty? ? Portfolio.where(user_id: @current_user_id).last.balance : 0
                    @portfo_record = Portfolio.new({
                        user_id: @current_user_id,
                        balance: last_cash_balance += @bank_trans.transaction_amount
                    })
                    @portfo_record.save!
                when  "Withdraw"
                    last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
                    @portfo_record = Portfolio.new({
                        user_id: @current_user_id,
                        balance: last_cash_balance -= @bank_trans.transaction_amount                        
                    })
                    @portfo_record.save!
                else
                    "Not a valid trans type"                    
                end
            end
            render :bank_index
        else
            last_cash_balance = Portfolio.where(user_id: @current_user_id).last.balance
            params[:transaction_amount] = (params[:quantity].to_i * params[:cost_per_share].to_i).to_s

            History.create(transaction_params)
            
            params[:transaction_amount] = ((params[:quantity].to_i * params[:cost_per_share].to_i) / params[:quantity].to_i).to_s

            case params[:transaction_type]
            when "Buy"
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance -= params[:transaction_amount].to_i
                })
            when "Sell"
                Portfolio.create({
                    user_id: @current_user_id,
                    balance: last_cash_balance += params[:transaction_amount].to_i
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

            @records.each do |transaction_obj|
                if !transaction_obj.save
                    return
                end
            end
            @saved_records = Transaction.last(@records.length)
            render :index
        end
    end

    private
    def transaction_params
        params.permit(:user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share)
    end
end