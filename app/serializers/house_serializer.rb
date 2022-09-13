class HouseSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :rooms, :bathrooms, :sqft, :description, :price, :on_market, :undercontract, :pool, :water_front, :condo 

  has_many :pictures

  def on_market 
    if self.object.on_market
      return "House for sale"
    else
      return "Coming soon"
    end
  end

  def undercontract
    if self.object.undercontract
      return "Accepting Backup Offers"
    else
      return "House for sale"
    end
  end

  # def picture_order
  #   self.object.pictures.order(:order_number)
  # end
end
