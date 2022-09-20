class HousesController < ApplicationController
    skip_before_action :authorize

    def index
        houses = House.all
        render json: houses, status: :ok
    end

    def create 
        house = House.create!(house_params)
        render json: house, status: :created 
    end

    private 

    def house_params
        params.permit(:address, :city, :state, :zip_code, :rooms, :bathrooms, :sqft, :description, :price, :on_market, :under_contract, :pool, :waterfront, :condo)
    end
end
