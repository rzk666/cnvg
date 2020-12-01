class Driver < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, email: true
    has_many :carsanddrivers
    has_many :cars, :through => :carsanddrivers
end
