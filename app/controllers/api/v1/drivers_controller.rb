# Will use this later to get timestamps for cars and drivers page
# timestamps = Carsanddriver.where(driver_id: params[:id]).pluck(:created_at)

module Api
  module V1
    class DriversController < ApplicationController
      def index
        drivers = Driver.all

        render json: DriverSerializer.new(drivers).serialized_json
      end

      def create
        newDriver = Driver.new(driver_params)

        if newDriver.save
          drivers = Driver.all
          render json: DriverSerializer.new(drivers).serialized_json
        else
          render json: { error: 'Could not save driver' }, status: 442
        end
      end

      private

      def driver_params
        params.permit(:name, :email, :dateOfBirth, car_ids: [])
      end

      def options
        @options ||= { include: %i[cars] }
      end

    end
  end
end
