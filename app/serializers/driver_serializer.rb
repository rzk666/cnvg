class DriverSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :dateOfBirth, :updated_at

  has_many :cars
end
