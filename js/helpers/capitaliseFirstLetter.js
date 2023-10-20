export const capitaliseFirstLetter = text => {
  const formatedText = text.charAt(0).toUpperCase() + text.slice(1)
  return formatedText;
}