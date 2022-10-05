class HouseSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :rooms, :bathrooms, :sqft, :description, :price, :on_market, :under_contract, :pool, :waterfront, :condo

  has_many :pictures do
    object.pictures.order(:order_number)
  end

end
