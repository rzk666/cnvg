class Car < ApplicationRecord
    has_many :carsanddrivers
    has_many :drivers, :through => :carsanddrivers
end
