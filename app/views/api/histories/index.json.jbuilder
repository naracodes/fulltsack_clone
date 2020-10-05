# @histories.each do |history|
#     json.set! history.user_id do
#         json.extract! history, :user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share, :created_at
#     end
# end

json.histories(@histories) do |history|
  json.user_id history.user_id
  json.ticker history.ticker
  json.transaction_type history.transaction_type
  json.transaction_amount history.transaction_amount
  json.quantity history.quantity
  json.cost_per_share history.cost_per_share
  json.created_at history.created_at
end