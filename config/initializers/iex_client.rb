require 'iex-ruby-client'

IEX::Api.configure do |config|
    config.publishable_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
    config.endpoint = 'https://sandbox.iexapis.com/v1'
end

client = IEX::Api::Client.new(
  publishable_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
  endpoint: 'https://sandbox.iexapis.com/v1'
)