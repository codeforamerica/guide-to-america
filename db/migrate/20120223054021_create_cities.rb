class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.text :name
      t.text :state

      t.timestamps
    end

    change_table :tips do |t|
      t.integer :city_id
    end
  end
end
