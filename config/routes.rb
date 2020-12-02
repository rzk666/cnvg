Rails.application.routes.draw do
  root 'pages#index'

  # Temp
  namespace :api do
    namespace :v1 do
      resources :articles
      resources :drivers, param: :id
      resources :cars, param: :id
      resources :carsanddrivers, param: :id, only: [:show]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
