class Api::AssetsController < ApplicationController
    def index
        @assets = Asset.order('ticker ASC')
        # render json: { status: 'Success!', message: 'Showing all assets', data: @assets}, status: :ok
        render :index
    end
    
    def show
        # @asset = Asset.find_by(id: params[:id])
        # debugger
        @asset = Asset.find_by(ticker: params[:ticker].upcase)
        # render json: { status: 'Success!', message: 'Showing asset', data: @asset}, status: :ok
        render json: { data: @asset }
    end
    
    def create
        @asset = Asset.new(asset_params)
        if @asset.save
            render json: { status: 'Saved!', message: 'saved', data: @asset}, status: :ok
        else
            render json: { status: 'ERROR', message: 'asset not saved', data: article.errors }, status: :unprocessable_entity
        end
    end
    
    def update
        @asset = Asset.find(params[:id])
        if @asset.update_attributes(asset_params)
            render json: { status: 'Success!', message: 'updated asset', data: @asset}, status: :ok
        else
            render json: { status: 'ERROR', message: 'asset not updated', data: article.errors }, status: :unprocessable_entity
        end
    end
    
    def destroy
        @asset = Asset.find_by(id: params[:id])
        @asset.destroy
        render json: { status: 'Saved!', message: 'deleted asset', data: @asset}, status: :ok
    end

    private
    def asset_params
        params.permit(:ticker, :asset_name)
    end
end
