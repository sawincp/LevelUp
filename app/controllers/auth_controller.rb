class AuthController < ApplicationController
    skip_before_action :require_login, only: [:login, :auto_login, :logout]
    
    def login
      user = User.find_by(username: params[:user][:username])
      if user && user.authenticate(params[:user][:password])
          payload = {user_id: user.id}
          token = encode_token(payload)
          render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized      end
    end
  
    def auto_login
      if session_user
        render json: session_user
      else
        nil
      end
    end
  
    def user_is_authed
      render json: {message: "You are authorized"}
    end


    def logout
      render json: {message: "Logged out successfully"}
    end

  end