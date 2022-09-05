class CustomersController < ApplicationController
    skip_before_action :authorize, only: :create

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
        params.permit(:email.strip, :password, :password_confirmation, :first_name.strip, :last_name.strip, :phone_number)
    end
end
