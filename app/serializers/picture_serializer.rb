class PictureSerializer < ActiveModel::Serializer
  attributes :id ,:picture_url, :order_number
  has_one :house_id

end
