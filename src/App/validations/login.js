const isValidEmail = (email) => {
  if (!email) {
    return false;
  }

  return email.indexOf('@') !== -1;
};

const validateEmail = (email) => {
  if (!email) {
    return 'Please, provide your email';
  } else if (!isValidEmail(email)) {
    return 'Yikes! that’s not a valid mail address, don’t forget to add “@”';
  }
};

export default (values) => {
  let errors = {};

  errors.email = validateEmail(values.email);

  return errors;
};
