class Schedule < ApplicationRecord
  belongs_to :house
  belongs_to :customer

  validates :day, presence: true
  validates :time, presence: true, numericality: {only_integer: true}
  validates :house_id, presence: true
end
