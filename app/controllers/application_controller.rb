class ApplicationController < ActionController::API
include ActionController::Cookies 
before_action :authorize 

    def authorize
        @customer = Customer.find_by(id: session[:customer_id])
        @employee = Employee.find_by(id: session[:employee_id])
        if(@customer)
            return render json: { errors: ["Not authorize customer"] }, status: :unauthorized unless @customer
        elsif(@employee)
            return render json: { errors: ["Not authorize employee"] }, status: :unauthorized unless @employee
        end  
    end

end
