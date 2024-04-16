Rails.application.routes.draw do
  
  post "/login", to: "auth#login"
  post "/logout", to: "auth#logout"
  get "/auto_login", to: "auth#auto_login"
  
  resource :users, only: [:create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end