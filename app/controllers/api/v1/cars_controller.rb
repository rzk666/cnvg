module Api
  module V1
    class CarsController < ApplicationController
      def index
        cars = Car.all
        serializer = CarSerializer.new()
        render json: serializer.serialize_cars(cars: cars)
      end

      def show
        car = Car.find_by(id: params[:id])
        serializer = CarSerializer.new()
        render json: serializer.serialize_car(car: car, options: 'with drivers')
      end

      def create
        createParams = car_params
        createParams[:driver_ids] = JSON.parse car_params[:driver_ids]
        newCar = Car.new(createParams)

        if newCar.save
          render json: { message: 'Success' }, status: 200
        else
          render json: { error: 'Could not save car' }, status: 442
        end
      end

      private

      def car_params
        params.permit(:title, :model, :color, :driver_ids, :image)
      end
    end
  end
end
