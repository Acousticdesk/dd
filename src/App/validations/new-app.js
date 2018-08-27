const validateName = (name) => {
  if (!name) {
    return 'Please, enter a name of the application';
  }
};

const validatePackage = (pckg) => {
  if (!pckg) {
    return 'Please, enter a package name';
  }
};

export default (values) => {
  let errors = {};

  errors.name = validateName(values.name);
  errors.package = validatePackage(values.package);

  return errors;
};
