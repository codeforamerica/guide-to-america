class CreateTips < ActiveRecord::Migration
  def change
    create_table :tips do |t|
      t.text :tip
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
