class CustomersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    def index 
        customers = Customer.all 
        render json: customers, status: :ok
    end

    def create
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id 
        render json: customer, status: :created 
    end

    def show 
        current_customer = Customer.find(session[:customer_id])
        render json: current_customer
    end

    private 

    def customer_params 
        params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :phone_number)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end

end
