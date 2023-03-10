Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '/people', to: 'people#index'
  get '/people/:id', to: 'people#show'
  # create just a person, no company
  post '/people', to: 'people#createOne'
  # create a person to a specific company
  post '/companies/:id/staff', to: 'people#createForCompany'
  delete '/people/:id', to: 'people#delete'
  put '/people/:id', to: 'people#update'

  # =================================================
  #            ROUTES FOR COMPANY MODEL
  # =================================================
  get '/companies', to: 'companies#index'
  get '/companies/:id', to: 'companies#show'
  # create just a company, no staff
  post '/companies', to: 'companies#create'
  post '/people/:id/company', to: 'companies#createWithStaff'
  delete '/companies/:id', to: 'companies#delete'
  put '/companies/:id', to: 'companies#update'

end
