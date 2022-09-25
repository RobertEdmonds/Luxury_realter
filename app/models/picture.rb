class Picture < ApplicationRecord
  belongs_to :house

  validates :picture_url, presence: true
  validates :order_number, presence: true, numericality: {less_than: 8}
  validates :house_id, presence: true
end
