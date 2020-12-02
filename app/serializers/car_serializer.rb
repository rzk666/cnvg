class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :model, :color

  has_many :drivers
end
