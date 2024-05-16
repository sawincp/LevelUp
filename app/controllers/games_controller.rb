class GamesController < ApplicationController
    skip_before_action :require_login, only: [:index]
    
    def index
        render json: Game.all
    end

    def create
        @user = session_user
        if @user
            game = @user.games.create!(game_params)
            render json: game
        else
            render json: {message: "Please Login"}, status: :unauthorized
        end
    end

    private

    def game_params
        params.require(:game).permit(:title, :cover_art, :release_date, :genre_id, :comment, :youtubeId, :console_id)
    end

end
