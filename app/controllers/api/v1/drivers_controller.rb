module Api
  module V1
    class DriversController < ApplicationController
      def index
        drivers = Driver.all
        serializer = DriverSerializer.new()
        render json: serializer.serialize_drivers(drivers: drivers)
      end

      def show
        driver = Driver.find_by(id: params[:id])
        serializer = DriverSerializer.new()
        render json: serializer.serialize_driver(driver: driver, options: 'with cars')
      end

      def create
        createParams = driver_params
        createParams[:car_ids] = JSON.parse driver_params[:car_ids]
        newDriver = Driver.new(createParams)

        if newDriver.save
          render json: { message: 'Success' }, status: 200
        else
          render json: { error: 'Could not save driver' }, status: 442
        end
      end

      private

      def driver_params
        params.permit(:name, :email, :dateOfBirth, :car_ids, :image)
      end

    end
  end
end
