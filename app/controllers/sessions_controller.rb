class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create] 

    def create 
        customer = Customer.find_by(email: params[:email])
        employee = Employee.find_by(email: params[:email])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id 
            render json: customer, status: :created 
        elsif employee&.authenticate(params[:password])
            session[:employee_id] = employee.id 
            render json: employee, status: :created
        else
            render json: {errors: ["Password or Email doesn't match our file"]}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :customer_id
        session.delete :employee_id
        head :no_content
    end
end
