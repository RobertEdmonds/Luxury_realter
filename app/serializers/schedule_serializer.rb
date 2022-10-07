class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :day, :time, :house_id, :customer_id
  belongs_to :house, serializer: HouseAddressSerializer 
  belongs_to :customer
end
