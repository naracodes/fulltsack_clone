class Api::WatchlistsController < ApplicationController

    def index
        @current_user = current_user || User.find_by(firstName: "Demo")
        @watchlist_assets =  Watchlist.where('user_id = ?', @current_user.id)
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
                if @watchlist_asset.save
                    @current_user = current_user || User.find_by(firstName: "Demo")
                    @watchlist_assets =  Watchlist.where('user_id = ?', @current_user.id)
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
        params.permit(:ticker, :user_id, :asset_name, :latest_price, :prev_close)
    end
end
