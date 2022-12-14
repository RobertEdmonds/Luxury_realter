class Customer < ApplicationRecord
    has_secure_password 
    has_many :schedules, dependent: :destroy
    has_many :houses, through: :schedules 

    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" } 
    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" }  
    validates :phone_number, presence: true, uniqueness: true, numericality: { only_integer: true }, length: { minimum: 10, maximum: 12 }
    validates :password, confirmation: true  
    validates :password_confirmation, presence: true 
end
