class ApplicationController < ActionController::API
include ActionController::Cookies 
before_action :authorize 

    def authorize
        @customer = Customer.find_by(id: session[:customer_id])
        return render json: { errors: ["Not authorize"] }, status: :unauthorized unless @customer
    end

end
