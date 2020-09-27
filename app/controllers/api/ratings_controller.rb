class Api::RatingsController < ApplicationController

    def index
        @ratings = Rating.all
        render json: {data: @ratings}
    end

    def show
        @rating = Rating.find_by(ticker: params[:ticker])
        render json: { data: @rating }
    end

    def create
        @rating = Rating.new(rating_params)
        if @rating.save
            render json: {data: @rating}
        else
            render json: @rating.errors.full_messages
        end
    end

    private
    def rating_params
        # params.require(:rating).permit(:rating_buy, :rating_ow, :rating_hold, :rating_uw, :rating_sell, :rating_none, :rating_scale_mark)
        params.permit(:rating_buy, :rating_ow, :rating_hold, :rating_uw, :rating_sell, :rating_none, :rating_scale_mark, :ticker)
    end
end
