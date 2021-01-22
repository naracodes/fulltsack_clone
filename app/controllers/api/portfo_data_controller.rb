class Api::PortfoDataController < ApplicationController
    def index
        debugger
        portfo_data_params = params
        
    end

    private
    def portfo_data_params
        params.permit(:range)
    end
end