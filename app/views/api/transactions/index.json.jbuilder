@transactions.each do |transaction|
    # debugger
    json.set! transaction.id do
        # debugger
        json.extract! transaction, :user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share
    end
end