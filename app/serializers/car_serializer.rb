class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :model, :color, :updated_at

  has_many :drivers
end
