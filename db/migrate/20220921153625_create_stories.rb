class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :picture_url
      t.string :name
      t.string :second_name
      t.string :description

      t.timestamps
    end
  end
end
