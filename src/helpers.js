// removes hyphens and adds capitalization
// e.g. 'vermilion-city' => 'Vermilion City'
export const formatText = (text) => {
  if (!text) {
    return '';
  }
  const removeHyphens = text.replace(/-/g, ' ')
  .split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(' ');
  return removeHyphens;
};

// get random item from array
export const getRandomItemFromArray = (array) => {
  return array[Math.floor((Math.random()*array.length))];
};
