class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            Transaction.create({
                user_id: @user.id,
                transaction_type: "Deposit",
                transaction_amount: 1000000,
            })
            render :show
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