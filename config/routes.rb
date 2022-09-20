Rails.application.routes.draw do
  # resources :employees
  resources :pictures
  resources :houses, only: [:index, :create]
  resources :home_images, only: [:index]
  get '/employee', to: 'employees#show'
  post '/signup', to: 'customers#create'
  get '/me', to: 'customers#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: "sessions#destroy"

end
