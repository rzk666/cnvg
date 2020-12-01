class CreateCarsAndDriversJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :title
      t.string :model
      t.string :color

      t.timestamps
    end

    create_table :drivers do |t|
      t.string :name
      t.string :email
      t.datetime :dateOfBirth

      t.timestamps
    end

    create_join_table :cars, :drivers do |t|
      t.index :car_id
      t.index :driver_id

      t.timestamps
    end

  end
end
