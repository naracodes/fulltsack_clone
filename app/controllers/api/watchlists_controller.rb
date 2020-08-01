class WatchlistsController < ApplicationController

    def index
        @watchlist_assets = Watchlist.where('user_id = ?', @current_user.id)
        render :index
    end

    def create
        @watchlist_asset = Watchlist.new(watchlist_params)
        if @asset.save
            render json: { data: @watchlist_asset }
        end
    end

    def destroy
        @watchlist_asset = Watchlist.find_by(ticker: params[:ticker], user_id: params[user_id])
        if @watchlist_asset
            @watchlist_asset.destroy            
        end
        render json: { message: 'watchlist asset deleted', data: @watchlist_asset}
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:ticker, :user_id)
    end
end
