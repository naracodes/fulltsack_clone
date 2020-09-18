class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            # render '/api/users/show' 
            render :show
        else
            render json: ["Unable to log in with provided credentials."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            # render json: ["signed out"]
        else
            render json: ["No user to log out"], status: 404
        end
    end
end

