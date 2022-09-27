class PicturesController < ApplicationController

    def create 
        pic = Picture.create!(photo_params)
        render json: pic, status: :created
    end

    def update 
        @photo = Picture.find(params[:id])
        house = House.find_by(id: params[:house_id])
        old_photo = house.pictures.find_by(order_number: params[:order_number])
        old_photo.update(order_number: @photo[:order_number])
        @photo.update!(photo_params)
        render json: @photo, status: :created 
    end

    def destroy 
        pic = Picture.find(params[:id])
        pic.destroy
        head :no_content
    end

    private 

    def photo_params 
        params.permit(:id, :picture_url, :house_id, :order_number)
    end
end
