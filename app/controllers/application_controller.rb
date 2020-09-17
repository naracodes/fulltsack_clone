require 'iex-ruby-client'

class ApplicationController < ActionController::Base

    # protect_from_forgery with: :null_session
    protect_from_forgery with: :exception
    protect_from_forgery prepend: true
    #CELLL
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end


    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end


    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    IEX::Api.configure do |config|
        config.publishable_token = 'Tpk_9cc6c16a40494338943d728d111e9998' # defaults to ENV['IEX_API_PUBLISHABLE_TOKEN']
        config.endpoint = 'https://sandbox.iexapis.com/v1'
    end

    client = IEX::Api::Client.new(
    publishable_token: 'Tpk_9cc6c16a40494338943d728d111e9998',
    endpoint: 'https://sandbox.iexapis.com/v1'
)
end
