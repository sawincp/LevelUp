class ConsolesController < ApplicationController
    skip_before_action :require_login, only: [:index]

    def index
        render json: Console.all
    end


end
