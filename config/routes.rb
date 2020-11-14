Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "puzzles#index"
  resources :puzzles, only: [:index, :show]
  resources :scores, only: [:create]
end
