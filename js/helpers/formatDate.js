export const formatDate = isoString => {
  const date = new Date(isoString);

  const formatter = new Intl.DateTimeFormat('ua-UA',
  {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
}