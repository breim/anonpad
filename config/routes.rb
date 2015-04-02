Rails.application.routes.draw do
	root 'documents#index'
	resources :documents, path: :pastes
end
