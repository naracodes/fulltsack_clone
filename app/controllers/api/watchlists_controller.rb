class Api::WatchlistsController < ApplicationController

    def index
        # debugger
        @watchlist_assets =  Watchlist.where('user_id = ?', current_user.id)
        # @watchlist_assets = Watchlist.all
        render :index
    end

    def show
        @watchlist_asset = Watchlist.find_by(ticker: params[:ticker])
        render :show
    end

    def create
        debugger
        if !Watchlist.exists?(watchlist_params)
            @watchlist_asset = Watchlist.new(watchlist_params)
                if @watchlist_asset.save
                    render :show
                    # render json: { data: @watchlist_asset }
                end
        else
            debugger
            render json: { message: 'asset already exists on watchlist' }
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
        # params.require(:watchlist).permit(:ticker, :user_id => current_user.id)
        params.permit(:ticker, :user_id, :asset_name)
    end
end
