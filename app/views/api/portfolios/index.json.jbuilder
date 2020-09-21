# @portfolio_data.each do |data|
#     json.set! data.user_id do
#         json.extract! data, :user_id, :balance
#     end
# end

json.portfolio_data(@portfolio_data) do |data|
  json.user_id data.user_id
  json.balance data.balance
  json.created_at data.created_at
end