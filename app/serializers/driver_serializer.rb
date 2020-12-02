class DriverSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :dateOfBirth

  has_many :cars
end
