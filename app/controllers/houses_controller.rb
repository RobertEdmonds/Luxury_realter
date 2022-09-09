class HousesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        houses = House.all
        render json: houses, status: :ok
    end
end
