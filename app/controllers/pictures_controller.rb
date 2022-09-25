class PicturesController < ApplicationController

    def update 
        @photo = Picture.find(params[:id])
        house = House.find_by(id: params[:house_id])
        old_photo = house.pictures.find_by(order_number: params[:order_number])
        old_photo.update(order_number: @photo[:order_number])
        @photo.update!(photo_params)
        render json: @photo, status: :created 
    end

    private 

    def photo_params 
        params.permit(:picture_url, :house_id, :order_number)
    end
end
