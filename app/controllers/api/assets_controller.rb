class Api::AssetsController < ApplicationController
    def index
        @assets = Asset.all
    end

    def show
        @asset = Asset.find_by(ticker: params[:ticker])
    end
end
