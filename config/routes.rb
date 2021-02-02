Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:new, :create, :destroy]
    resources :assets, except: [:show]
    resources :watchlists, only: [:index, :create]
    resources :portfolios, only: [:index, :show, :create]
    resources :transactions, only: [:index, :show, :create]
    resources :histories, only: [:index, :show, :create]
    resources :holdings, only: [:index, :show, :create]
    # resources :portfo_data, only: [:index, :show, :create]
    resources :ratings, only: [:index, :create]
    get '/assets/:ticker', to: 'assets#show'
    get '/ratings/:ticker', to: 'ratings#show'
    get '/portfo_data/:range', to: 'portfo_data#index'
    delete 'watchlists/:ticker', to: 'watchlists#destroy'
  end
  

end
