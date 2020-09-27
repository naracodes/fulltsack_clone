class Api::RatingsController < ApplicationController

    def index
        @ratings = Rating.all
        render json: {data: @ratings}
    end

    def show
        
    end

    def create
        @rating = Rating.new(rating_params)
    end

    private
    def rating_params
        params.require(:rating).permit(:rating_buy, :rating_ow, :rating_hold, :rating_uw, :rating_sell, :rating_none, :rating_scale_mark)
    end
end
