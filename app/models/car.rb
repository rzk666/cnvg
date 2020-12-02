class Car < ApplicationRecord
    include Rails.application.routes.url_helpers

    has_one_attached :image

    validates :title, presence: true
    validates :color, inclusion: { in: ["blue", "yellow", "red", nil] }
    has_many :carsanddrivers
    has_many :drivers, :through => :carsanddrivers

    def get_image_url
        url_for(self.image)
    end

end
