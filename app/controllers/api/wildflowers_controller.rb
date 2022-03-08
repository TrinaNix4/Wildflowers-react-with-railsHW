class Api::WildflowersController < ApplicationController

before_action :set_wildflower, only: [:show, :update, :destroy]
def index 
  render json: Wildflower.all
end

def show
  render json: @wildflower
end 

def destroy
  render json: @wildflower.destroy
end

def create 
  wildflower = Wildflower.new(wildflower_params)
  if(wildflower.save)
    render json: wildflower
  else
    render json: {errors: wildflower.errors.full_messages}, status: 422
  end
end 

def update 
  if(@wildflower.update(wildflower_params))
    render json: @wildflower
  else
    render json: {errors: @wildflower.errors.full_messages}, status: 422
  end
end 


private
def wildflower_params
  params.require(:wildflower).permit(:common_name, :scientific_name, :description, :Observed)
end 

def set_wildflower
  @wildflower = Wildflower.find(params[:id])
end

end 
