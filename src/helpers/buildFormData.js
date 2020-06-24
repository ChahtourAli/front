const buildFormData = (formData, data, parentKey) => {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else if (data instanceof File) {
    formData.append(parentKey.split('[')[0], data);
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
};

export default buildFormData;
