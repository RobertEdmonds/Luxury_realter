class Customer < ApplicationRecord
    has_secure_password 

    validates :email, presence: true, uniqueness: true, format: { with: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i, message: "Only valid Email Addresses"}
    validates :first_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" } 
    validates :last_name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "Only allows letters" }  
    validates :phone_number, presence: true, uniqueness: true, length: {is:10}
    validates :password, confirmation: true  
    validates :password_confirmation, presence: true 
end
