class Customer < ApplicationRecord
    has_secure_password 

    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" } 
    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" }  
    validates :phone_number, presence: true, uniqueness: true, length: {is:10}, numericality: { only_integer: true }
    validates :password, confirmation: true  
    validates :password_confirmation, presence: true 
end
