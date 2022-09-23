class HousesController < ApplicationController
    skip_before_action :authorize, only: :index
rescue_from ActiveRecord::RecordNotFound, with: :intity_not_found

    def index
        houses = House.all
        render json: houses, status: :ok
    end

    def create 
        house = House.create!(house_params)
        house.pictures.create(picture_url: "https://freesvg.org/img/1410828243.png", order_number: 1)
        render json: house, status: :created 
    end

    def update 
        house = House.find(params[:id])
        house.update!(house_params)
        render json: house, status: :created 
    end

    def show 
        house = House.find(params[:id])
        render json: house, status: :ok
    end

    def destroy 
        house = House.find(params[:id])
        house.destroy
        head :no_content
    end


    private 

    def house_params
        params.permit(:address, :city, :state, :zip_code, :rooms, :bathrooms, :sqft, :description, :price, :on_market, :under_contract, :pool, :waterfront, :condo)
    end

    def intity_not_found
        render json: { error: "House Not Found!"}, status: :not_found
    end

end
