class AddMrnameToCity < ActiveRecord::Migration
  def change
    add_column :cities, :machine_name, :string
  end
end
