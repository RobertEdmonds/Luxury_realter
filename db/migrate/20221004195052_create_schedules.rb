class CreateSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :schedules do |t|
      t.string :day
      t.integer :time
      t.belongs_to :house, null: false, foreign_key: true
      t.belongs_to :customer, foreign_key: true

      t.timestamps
    end
  end
end
