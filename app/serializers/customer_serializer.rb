class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :full_name

  def full_name 
    "#{object.first_name} #{object.last_name}"
  end
end
