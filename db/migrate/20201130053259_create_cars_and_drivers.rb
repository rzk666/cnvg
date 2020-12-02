class CreateCarsAndDrivers < ActiveRecord::Migration[6.0]
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

    create_table :carsanddrivers do |t|
      t.references :driver, index: true, foreign_key: true
      t.references :car, index: true, foreign_key: true
      t.timestamps null: false
    end

  end
end
