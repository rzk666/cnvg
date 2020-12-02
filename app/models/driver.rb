class Driver < ApplicationRecord
    include Rails.application.routes.url_helpers

    has_one_attached :image

    validates :name, presence: true
    validates :email, presence: true, email: true
    has_many :carsanddrivers
    has_many :cars, :through => :carsanddrivers

    def get_image_url
        url_for(self.image)
    end
end
