class Api::WatchlistsController < ApplicationController

    def index
        # debugger
        @watchlist_assets =  Watchlist.where('user_id = ?', current_user.id)
        # @watchlist_assets =  Watchlist.where('email = ?', current_user.email)
        # @watchlist_assets = Watchlist.all
        # debugger
        render :index
    end

    def show
        @watchlist_asset = Watchlist.find_by(ticker: params[:ticker])
        render :show
    end

    def create
        if !Watchlist.exists?(ticker: params[:ticker], user_id: current_user.id)
            @watchlist_asset = Watchlist.new(watchlist_params)
            # debugger
                # @watchlist_asset.asset_id = Asset.where(ticker: watchlist_params[:ticker]).first.id
                if @watchlist_asset.save
                    @watchlist_assets = Watchlist.where('user_id = ?', current_user.id)

                    # debugger
                    render :index
                    # render json: { data: @watchlist_asset }
                end
        else
            render json: { message: 'asset already exists on watchlist' }
        end
    end

    def destroy
        @watchlist_asset = Watchlist.find_by(ticker: params[:ticker], user_id: params[:user_id])
        if @watchlist_asset
            @watchlist_asset.destroy
            render :show
        else
            render json: { message: 'error while destroying' }
        end
    end

    private
    def watchlist_params
        # params.require(:watchlist).permit(:ticker, :user_id => current_user.id)
        params.permit(:ticker, :user_id, :asset_name, :latest_price, :asset_id)
    end
end
