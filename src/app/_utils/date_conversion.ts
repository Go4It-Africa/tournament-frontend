const convert_date = (date: number | string) => {
  const converted_date = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return converted_date.split(' ').join('-');
};

export default convert_date;
