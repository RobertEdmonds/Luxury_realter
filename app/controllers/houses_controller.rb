class HousesController < ApplicationController
    skip_before_action :authorize

    def index
        houses = House.all
        render json: houses, status: :ok
    end
end
