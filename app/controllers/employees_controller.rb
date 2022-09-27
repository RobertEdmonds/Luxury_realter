class EmployeesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 

    def create
        employee = Employee.create!(employee_params)
        session[:employee_id] = employee.id 
        render json: employee, status: :created 
    end

    def show 
        current_employee = Employee.find(session[:employee_id])
        render json: current_employee
    end

    def update
        employee = Employee.find(session[:employee_id])
        employee.update(employee_params)
        render json: employee, status: :created 
    end

    private 

    def employee_params 
        params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :phone_number, :employee_number)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end
