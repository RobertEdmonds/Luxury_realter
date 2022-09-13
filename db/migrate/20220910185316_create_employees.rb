class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.integer :phone_number
      t.integer :employee_number

      t.timestamps
    end
  end
end
