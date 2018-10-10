export default (optionsValues) => {
  if (!optionsValues || !Array.isArray(optionsValues)) {
    return null;
  }

  return optionsValues.map(o => ({ value: o, label: o }));
};
