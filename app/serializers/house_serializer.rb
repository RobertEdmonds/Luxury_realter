class HouseSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :rooms, :bathrooms, :sqft, :description, :price, :on_market, :undercontract, :pool, :water_front, :condo

  has_many :pictures
end
