class GamesController < ApplicationController
    skip_before_action :require_login, only: [:index]
    
    def index
        render json: Game.all
    end

end
