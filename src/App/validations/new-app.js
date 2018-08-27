const validateName = (name) => {
  if (!name) {
    return 'Please, enter a name of the application';
  }
};

const validatePackage = (pckg) => {
  if (!pckg) {
    return 'Please, select a package';
  }
};

export default (values) => {
  let errors = {};

  errors.name = validateName(values.name);
  errors.package = validatePackage(values.package);

  return errors;
};
