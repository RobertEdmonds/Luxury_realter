class StoriesController < ApplicationController
    skip_before_action :authorize, only: [:index] 

    def index 
        stories = Story.all
        render json: stories, status: :ok
    end

    def create 
        story = Story.create!(story_params)
        render json: story, status: :created 
    end

    private 

    def story_params
        params.permit(:picture_url, :name, :second_name, :description)
    end
end
