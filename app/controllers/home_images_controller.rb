class HomeImagesController < ApplicationController

    def index 
        render json: HomeImage.all
    end
end
