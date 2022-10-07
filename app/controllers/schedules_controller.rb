class SchedulesController < ApplicationController

    def index 
        render json: Schedule.all, status: :ok
    end

    def show 
        house = House.find(params[:id])
        schedule = house.schedules 
        render json: schedule, status: :ok 
    end

    def show_by_customer 
        house = House.find(params[:id])
        show = house.schedules.find_by(customer_id: session[:customer_id])
        render json: show, status: :ok 
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
        head :no_content
    end

    private 

    def schedule_params 
        params.permit(:id, :day, :time, :house_id, :customer_id)
    end
        
end
