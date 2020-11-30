// Validate Functions
const validateRequired = (data) => (!data ? 'This field is required' : '');

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
