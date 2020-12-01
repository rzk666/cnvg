class DriverSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :dateOfBirth

  has_many :cars
end
