module Api
  module V1
    class DriversController < ApplicationController
      def index
        drivers = Driver.all

        render json: DriverSerializer.new(drivers).serialized_json
      end

      def show
        driver = Driver.find_by(id: params[:id])

        render json: DriverSerializer.new(driver, options).serialized_json
      end

      def create
        createParams = driver_params
        createParams[:car_ids] = JSON.parse driver_params[:car_ids]
        newDriver = Driver.new(createParams)

        if newDriver.save
          drivers = Driver.all
          render json: DriverSerializer.new(drivers).serialized_json
        else
          render json: { error: 'Could not save driver' }, status: 442
        end
      end

      private

      def driver_params
        params.permit(:name, :email, :dateOfBirth, :car_ids)
      end

      def options
        @options ||= { include: %i[cars] }
      end

    end
  end
end
