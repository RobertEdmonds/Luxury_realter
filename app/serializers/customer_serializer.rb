class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :full_name

  def full_name 
    "#{object.first_name} #{object.last_name}"
  end

  has_many :schedules 
  # do
  #   object.schedules.order(:house_id)
  # end
  has_many :houses, through: :schedules 
  # do
    # object.houses.order(:id)
  # end
end
