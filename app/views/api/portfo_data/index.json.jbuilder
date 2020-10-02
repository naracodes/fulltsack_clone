# @all_data.each do |data|
#     json.set! data.user_id do
#         json.extract! data, :user_id, :label, :cash_balance, :created_at, :date
#     end
# end

json.data(@all_data) do |data|
  json.user_id data.user_id
  json.label data.label
  json.cash_balance data.cash_balance
  json.created_at data.created_at
  json.date data.date
end