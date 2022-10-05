class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :day, :time
  has_one :house
  has_one :customer
end
