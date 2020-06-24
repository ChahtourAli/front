const formatOptions = arr => {
  if (!arr) return [];
  const options = arr.map(el => ({ label: el.title, value: el }));

  return options;
};

export default formatOptions;
