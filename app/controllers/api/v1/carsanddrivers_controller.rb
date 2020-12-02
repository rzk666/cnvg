module Api
  module V1
    class CarsanddriversController < ApplicationController
      def show
        if params[:type] === 'driver'
          timestamps = Carsanddriver.where(driver_id: params[:id]).select(:created_at, :car_id)
          # There are probably nicer ways of doing this :D
          responseData = timestamps.map { |timestamp| {:created_at => timestamp[:created_at], :car => Car.find_by(id: timestamp[:car_id])} }
        else
          timestamps = Carsanddriver.where(car_id: params[:id]).select(:created_at, :driver_id)
          responseData = timestamps.map { |timestamp| {:created_at => timestamp[:created_at], :name => Driver.find_by(id: timestamp[:driver_id]).name} }
        end
        render json: responseData.to_json
      end
    end
  end
end
