class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    SECRET_KEY = Rails.application.secrets.secret_key_base  # Use secrets.secret_key_base for security
  
    def encode_token(payload)
      JWT.encode(payload, SECRET_KEY, algorithm: 'HS256')  # Explicitly specify algorithm
    end
  
    def session_user
      decoded_hash = decoded_token
      return nil if decoded_hash.empty?  # Early return if empty
  
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  
    def auth_header
      request.headers['Authorization']
    end
  
    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')
        rescue JWT::DecodeError
          return []  # Return empty array on decode error
        end
      else
        return []  # Return empty array if no auth header
      end
    end
  end