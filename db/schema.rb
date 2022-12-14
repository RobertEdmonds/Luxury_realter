# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_04_195052) do
  create_table "customers", force: :cascade do |t|
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.integer "phone_number"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.integer "phone_number"
    t.integer "employee_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "home_images", force: :cascade do |t|
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "houses", force: :cascade do |t|
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip_code"
    t.integer "rooms"
    t.integer "bathrooms"
    t.integer "sqft"
    t.text "description"
    t.integer "price"
    t.boolean "on_market"
    t.boolean "under_contract"
    t.boolean "pool"
    t.boolean "waterfront"
    t.boolean "condo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pictures", force: :cascade do |t|
    t.string "picture_url"
    t.integer "house_id", null: false
    t.integer "order_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["house_id"], name: "index_pictures_on_house_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.string "day"
    t.integer "time"
    t.integer "house_id", null: false
    t.integer "customer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_schedules_on_customer_id"
    t.index ["house_id"], name: "index_schedules_on_house_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "picture_url"
    t.string "name"
    t.string "second_name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "pictures", "houses"
  add_foreign_key "schedules", "customers"
  add_foreign_key "schedules", "houses"
end
