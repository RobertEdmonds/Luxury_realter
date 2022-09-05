class HomeImagesController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: HomeImage.all
    end
    
end
