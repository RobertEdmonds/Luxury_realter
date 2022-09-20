class ApplicationController < ActionController::API
include ActionController::Cookies 
before_action :authorize 
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    def authorize
        @customer = Customer.find_by(id: session[:customer_id])
        @employee = Employee.find_by(id: session[:employee_id])
        if(@customer)
            return render json: { errors: ["Not authorize customer"] }, status: :unauthorized unless @customer
        elsif(@employee)
            return render json: { errors: ["Not authorize employee"] }, status: :unauthorized unless @employee
        end  
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end

end
