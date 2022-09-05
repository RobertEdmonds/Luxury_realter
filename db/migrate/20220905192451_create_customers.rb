class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.integer :phone_number
      t.string :password_digest

      t.timestamps
    end
  end
end
