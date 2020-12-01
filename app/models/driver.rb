class Driver < ApplicationRecord
    has_many :carsanddrivers
    has_many :cars, :through => :carsanddrivers
end
