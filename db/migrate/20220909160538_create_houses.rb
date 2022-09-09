class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.integer :rooms
      t.integer :bathrooms
      t.integer :sqft
      t.text :description
      t.integer :price
      t.boolean :on_market
      t.boolean :undercontract
      t.boolean :pool
      t.boolean :water_front
      t.boolean :condo

      t.timestamps
    end
  end
end
