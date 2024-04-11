Rails.application.routes.draw do
  
  post "/signup", to: "user#create"
  
  post "/login", to: "auth#login"
  get "/me", to: "auth#auto_login"

  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end