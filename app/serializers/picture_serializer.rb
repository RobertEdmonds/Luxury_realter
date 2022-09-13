class PictureSerializer < ActiveModel::Serializer
  attributes :picture_url, :order_number
  has_one :house_id

  # def picture_order 
  #   byebug 
  # end
end
