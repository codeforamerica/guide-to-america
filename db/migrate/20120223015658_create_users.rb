class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :position
      t.string :home_city
      t.string :year
      t.string :profession

      t.timestamps
    end
  end
end
