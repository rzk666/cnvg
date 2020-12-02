class CarSerializer

  def serialize_car(car: , options: nil)
    format_car(car, options)
  end

  def serialize_cars(cars: , options: nil)
    formattedCars = cars.map { |entity| format_car(entity, options) }
    formattedCars.to_json()
  end

  private

  def format_car(car, options)
    driverSerializer = DriverSerializer.new()
    {
        id: car.id,
        attributes: {
          title: car.title,
          model: car.model,
          color: car.color,
          image: car.image.attached? ? car.get_image_url() : ''
        },
        included: options ? JSON.parse(driverSerializer.serialize_drivers(drivers: car.drivers)) : []
    }
  end
end
