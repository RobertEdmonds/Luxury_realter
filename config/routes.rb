Rails.application.routes.draw do
  resources :home_images, only: [:index]
  post '/signup', to: 'customers#create'
  get '/me', to: 'customers#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: "sessions#destroy"
end
