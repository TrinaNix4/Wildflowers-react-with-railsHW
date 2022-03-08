Rails.application.routes.draw do
  
namespace :api do
#get request to wildflowers, takes me to my wildflowers controller to the
#index method; index method grabs all the wildflowers and returns back as json

get 'wildflowers', to: 'wildflowers#index'  
get 'wildflowers/:id', to: 'wildflowers#show'
post 'wildflowers', to: 'wildflowers#create'
put 'wildflowers/:id', to: 'wildflowers#update'
delete 'wildflowers/:id', to: 'wildflowers#destroy'


#use id to find the wildflower they want to delete it 
#use the id to find the wildflower and destroy it
#send back to them the entry that was destroyed 
  end
end
