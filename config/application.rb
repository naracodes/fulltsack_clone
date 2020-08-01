require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Quiche
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

  #   IEX::Api.configure do |config|
  #     config.publishable_token = 'publishable_token' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
  #     config.secret_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_SECRET_TOKEN']
  #     config.endpoint = 'https://sandbox.iexapis.com/' # use 'https://sandbox.iexapis.com/v1' for Sandbox
  #   end

  # client = IEX::Api::Client.new(
  # publishable_token: 'publishable_token',
  # secret_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
  # endpoint: 'https://sandbox.iexapis.com/'

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    # IEX::Api.configure do |config|
    #   config.secret_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
    # end
    
    # client = IEX::Api::Client.new(secret_token: 'Tpk_9cc6c16a40494338943d728d111e9998')
    # puts 'hello'
    # puts client.get('MSFT')
  end

end
