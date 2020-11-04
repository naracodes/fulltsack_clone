require 'json'

file = File.open "test.json"
data = JSON.load file

# puts data.count
# data.each do |datum|
#     puts datum["company_name"]
# end

# data.each do |datum|
#     puts datum
# end

# puts data.respond_to?('each')

puts data[0]