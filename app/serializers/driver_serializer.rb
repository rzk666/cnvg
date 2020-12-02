class DriverSerializer

  def serialize_driver(driver: , options: nil)
    format_driver(driver, options).to_json()
  end

  def serialize_drivers(drivers: , options: nil)
    formattedDrivers = drivers.map { |entity| format_driver(entity, options) }
    formattedDrivers.to_json()
  end

  private

  def format_driver(driver, options)
    carsSerializer = CarSerializer.new()
    {
        id: driver.id,
        attributes: {
          name: driver.name,
          email: driver.email,
          dateOfBirth: driver.dateOfBirth,
          image: driver.image.attached? ? driver.get_image_url() : ''
        },
        included: options ? JSON.parse(carsSerializer.serialize_cars(cars: driver.cars)) : []
    }
  end

end
