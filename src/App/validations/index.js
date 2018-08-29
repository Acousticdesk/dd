export const required = (value) => {
  return value ? undefined : 'The field is required';
};
