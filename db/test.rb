require 'json'

nyse = File.open "nyse.json"
nasdaq = File.open "nasdaq.json"
nyse_data = JSON.load nyse
nasdaq_data = JSON.load nasdaq

# puts data.count
# data.each do |datum|
#     puts datum["company_name"]
# end

# data.each do |datum|
#     puts datum
# end

# puts data.respond_to?('each')

puts nyse_data.count
puts nasdaq_data.count
puts(nyse_data.count + nasdaq_data.count)