class House < ApplicationRecord
    has_many :pictures, dependent: :destroy

    validates :address, presence: true, uniqueness: true
    validates :city, presence: true
    validates :state, presence: true, length: {minimum: 3}
    validates :zip_code, presence: true, length: {is: 5}, numericality: {only_integer: true}
    validates :rooms, presence: true, numericality: {only_integer: true}
    validates :bathrooms, presence: true, numericality: {only_integer: true}
    validates :sqft, presence: true, numericality: {only_integer: true}
    validates :description, presence: true
    validates :price, presence: true, numericality: {only_integer: true}
    validates :on_market, inclusion: {in: [true, false]}
    validates :under_contract, inclusion: {in: [true, false]}
    validates :pool, inclusion: {in: [true, false]}
    validates :waterfront, inclusion: {in: [true, false]}
    validates :condo, inclusion: {in: [true, false]}
end
