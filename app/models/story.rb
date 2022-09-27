class Story < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
    validates :picture_url, presence: true 
    validates :description, presence: true
end
