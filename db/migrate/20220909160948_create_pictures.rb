class CreatePictures < ActiveRecord::Migration[7.0]
  def change
    create_table :pictures do |t|
      t.string :picture_url
      t.belongs_to :house, null: false, foreign_key: true
      t.integer :order_number

      t.timestamps
    end
  end
end
