class StorySerializer < ActiveModel::Serializer
  attributes :id, :picture_url, :name, :second_name, :description
end
