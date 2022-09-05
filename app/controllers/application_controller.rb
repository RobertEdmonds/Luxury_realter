class ApplicationController < ActionController::Base
include ActionController::Cookies 
before_action :authorize 
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    def authorize
        @customer = Customer.find_by(id: session[:customer_id])
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless @customer
    end

    def render_unprocessable_entity
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end
