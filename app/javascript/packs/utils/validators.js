// Validate Functions
const validateRequired = (data) => (!data ? 'This field is required' : '');
const validateEmailFormat = (email) => {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return 'Invalid email address';
  }
  return '';
};

// Form Validate function
export const validateForm = (values, validator) => {
  const errors = {};
  Object.keys(values).forEach((field) => {
    const currentValue = values[field];
    const currentError = validator[field](currentValue);
    if (currentError) {
      errors[field] = currentError;
    }
  });
  return errors;
};

// Blog Validator
export const NEW_ARTICLE_VALIDATOR = {
  title: (title) => validateRequired(title),
  text: (text) => validateRequired(text),
};

// New Car Validator
export const NEW_CAR_VALIDATOR = {
  title: (title) => validateRequired(title),
  model: () => false,
  color: () => false,
  driver_ids: () => false,
  image: () => false,
};

// New Driver Validator
export const NEW_DRIVER_VALIDATOR = {
  name: (name) => validateRequired(name),
  email: (email) => {
    let error = validateRequired(email);
    if (error) {
      return error;
    }
    error = validateEmailFormat(email);
    return error;
  },
  dateOfBirth: () => false,
  car_ids: () => false,
  image: () => false,
};
