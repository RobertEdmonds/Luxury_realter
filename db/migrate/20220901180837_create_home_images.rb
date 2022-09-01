class CreateHomeImages < ActiveRecord::Migration[7.0]
  def change
    create_table :home_images do |t|
      t.string :img_url

      t.timestamps
    end
  end
end
