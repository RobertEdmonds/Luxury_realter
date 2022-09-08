class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create] 

    def create 
        customer = Customer.find_by(email: params[:email])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id 
            render json: customer, status: :created 
        else
            render json: {errors: ["Password or Email doesn't match our file"]}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :customer_id
        head :no_content
    end
end
