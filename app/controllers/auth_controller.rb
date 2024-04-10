class AuthController < ApplicationController

    before_action :require_login

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token, success: "Welcome back #{user.username}"}
        else
            render json: {errors: "Invalid username or password"}
        end
    end

    def auto_login
        if session_user
            render json: session_user
        else
            render json: {errors: "Must Log In"}
    end

    def logged_in?
        !!session_user
    end

    def require_login
        render json: {message: "Please Login"}, status: :unauthorized unless logged_in?
    end
end