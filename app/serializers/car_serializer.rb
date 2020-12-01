class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :model, :color

  has_many :drivers
end
