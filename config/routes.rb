Rails.application.routes.draw do
  resource :users, only: [:create]
  post "/login", to: "auth#login"
  post "/logout", to: "auth#logout"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"
end