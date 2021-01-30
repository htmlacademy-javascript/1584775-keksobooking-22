const getRandomInteger = function (min, max) {
  if (min < 0 || min >= max) {
    // eslint-disable-next-line no-console
    console.error('Значение min должно быть больше 0 и меньше max!');
    return;
  }

  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getRandomFloat = function (min, max, digit) {
  if (min < 0 || min >= max) {
    // eslint-disable-next-line no-console
    console.error('Значение min должно быть больше 0 и меньше max!');
    return;
  }

  return (Math.random() * (max-min) + min).toFixed(digit);
}

getRandomInteger(5,10);
getRandomFloat(4.3, 4.4, 3);
