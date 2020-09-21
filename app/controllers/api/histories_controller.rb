class Api::HistoriesController < ApplicationController
    def index
        # @histories = History.where(user_id: current_user.id)
        @histories = History.where(user_id: 46)
        render :index
    end
end
