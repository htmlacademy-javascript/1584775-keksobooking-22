const getRandomNumber = function (min, max) {
  return Math.random() * (max - min + 1) + min;
}

const getRandomInteger = function (min, max) {
  if (min < 0 || min >= max) {
    throw new Error('Значение min должно быть больше 0 и меньше max!');
  }

  return Math.floor(getRandomNumber(min, max));
}

const getRandomFloat = function (min, max, digit) {
  if (min < 0 || min >= max) {
    throw new Error('Значение min должно быть больше 0 и меньше max!');
  }

  return getRandomNumber(min, max).toFixed(digit);
}

getRandomInteger(5,10);
getRandomFloat(4.3, 4.4, 3);
