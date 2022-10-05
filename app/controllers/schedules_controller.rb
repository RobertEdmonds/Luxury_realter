class SchedulesController < ApplicationController

    def index 
        render json: Schedule.all, status: :okay 
    end

    def show 
        house = House.find(params[:house_id])
        schedule = house.schedules 
        render json: schedule, status: :okay 
    end

    def create 
        schedule = Schedule.create!(schedule_params)
        render json: schedule, status: :created 
    end

    def update 
        schedule = Schedule.find(params[:id])
        schedule.update(schedule_params)
    end

    def destroy 
        schedule = Schedule.find(params[:id])
        schedule.destroy 
        render :no_content
    end

    private 

    def schedule_params 
        params.permit(:day, :time, :house_id, :customer_id)
    end
        
end
