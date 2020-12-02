# Will use this later to get timestamps for cars and drivers page
# timestamps = Carsanddriver.where(driver_id: params[:id]).pluck(:created_at)

module Api
  module V1
    class CarsanddriversController < ApplicationController
      def show
        if params[:type] === 'driver'
          timestamps = Carsanddriver.where(driver_id: params[:id]).pluck(:created_at)
        else
          timestamps = Carsanddriver.where(car_id: params[:id]).pluck(:created_at)
        end
        render json: timestamps.to_json
      end
    end
  end
end
