class ApplicationController < ActionController::API
    include ActionController::Cookies

    SECRETE_KEY = Rails.application.secrete_key_base

    def encode_token(payload)
        JWT.encode(payload, SECRETE_KEY)
    end

    def session_user
        decoded_hash = decoded_token
        if !decoded_hash.empty? 
            puts decoded_hash.class
            user_id = decoded_hash[0]['user_id']
            @user = User.find_by(id: user_id)
        else
            nil 
        end
    end

    def auth_header
        request.headers['Authorization']
    end

    def decode_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, SECRETE_KEY, true, algorithim 'HS256')
            rescue JWT::DecodeError
                []
        end
    end
end
