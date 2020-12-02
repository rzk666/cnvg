module Api
  module V1
    class CarsController < ApplicationController
      def index
        cars = Car.all

        render json: CarSerializer.new(cars).serialized_json
      end

      def show
        car = Car.find_by(id: params[:id])

        render json: CarSerializer.new(car, options).serialized_json
      end

      def create
        newCar = Car.new(car_params)

        if newCar.save
          cars = Car.all
          render json: CarSerializer.new(cars).serialized_json
        else
          render json: { error: 'Could not save car' }, status: 442
        end
      end

      private

      def car_params
        params.permit(:title, :model, :color, driver_ids: [])
      end

      def options
        @options ||= { include: %i[drivers]}
      end

    end
  end
end
