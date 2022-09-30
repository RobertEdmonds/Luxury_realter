Rails.application.routes.draw do
  resources :stories, only: [:index, :create]
  resources :pictures, only: [:update, :create, :destroy]
  resources :houses
  resources :home_images, only: [:index]
  get '/employee', to: 'employees#show'
  post '/signup', to: 'customers#create'
  get '/me', to: 'customers#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: "sessions#destroy"
  patch "/employee_update", to: "employees#update"
  patch "/customer_update", to: 'customers#update'
  get "/customers", to: "customers#index"
  post "/employee", to: "employees#create"

end
