class Car < ApplicationRecord
    validates :title, presence: true
    validates :color, inclusion: { in: ["blue", "yellow", "red", nil] }
    has_many :carsanddrivers
    has_many :drivers, :through => :carsanddrivers
end
