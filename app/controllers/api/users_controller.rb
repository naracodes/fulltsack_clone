class Api::UsersController < ApplicationController

    def index
        
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
            # render json: ["success"]
            # render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    private

    def user_params
        params.require(:user).permit(:email, :firstName, :lastName, :password)
    end

end