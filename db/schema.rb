# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_19_170930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string "ticker", null: false
    t.string "asset_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latest_price"
    t.index ["ticker"], name: "index_assets_on_ticker", unique: true
  end

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "balance", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "transaction_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "asset_id"
    t.integer "quantity"
    t.float "cost_per_share"
    t.float "transaction_amount"
    t.string "ticker"
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "asset_id"
    t.string "ticker", null: false
    t.string "asset_name"
    t.float "latest_price"
    t.string "email"
    t.integer "user_id"
  end

end
