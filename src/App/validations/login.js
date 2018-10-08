const isValidEmail = (email) => {
  if (!email) {
    return false;
  }

  return email.indexOf('@') !== -1;
};

const validateEmail = (email) => {
  let msg;

  if (!email) {
    msg = 'Please, provide your email';
  }

  if (!isValidEmail(email)) {
    msg = 'Yikes! that’s not a valid mail address, don’t forget to add “@”';
  }

  return msg;
};

export default (values) => {
  const errors = {};

  errors.email = validateEmail(values.email);

  return errors;
};
