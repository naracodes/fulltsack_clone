class Api::WatchlistsController < ApplicationController

    def index
        @current_user = current_user || User.find_by(firstName: "Demo")
        @watchlist_assets =  Watchlist.where('user_id = ?', @current_user.id)
        debugger
        holdings = @current_user.holdings
        @ordered = []

        @watchlist_assets.each do |record|
            if holdings[record.ticker] > 0
                @ordered.unshift(record)
            else
                @ordered.push(record)
            end
        end
        render :index
    end

    def show
        @watchlist_asset = Watchlist.find_by(ticker: params[:ticker])
        render :show
    end

    def create
        if !Watchlist.exists?(ticker: params[:ticker], user_id: params[:user_id])
            @watchlist_asset = Watchlist.new(watchlist_params)
            # debugger
                # @watchlist_asset.asset_id = Asset.where(ticker: watchlist_params[:ticker]).first.id
                if @watchlist_asset.save
                    @watchlist_assets = Watchlist.where('user_id = ?', current_user.id)

                    # debugger
                    render :index
                    # render json: { data: @watchlist_asset }
                else
                    render json: { message: 'Error while saving asset' }
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
        params.permit(:ticker, :user_id, :asset_name, :latest_price, :prev_close)
    end
end
