const ERROR = 'Значение min должно быть больше 0 и меньше max!';

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

const getRandomInteger = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error(ERROR);
  }

  return Math.floor(getRandomNumber(min, max));
}

const getRandomFloat = (min, max, digit) => {
  if (min < 0 || min >= max) {
    throw new Error(ERROR);
  }

  return getRandomNumber(min, max).toFixed(digit);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArray = (elements) => {
  const similarArray = new Array(getRandomInteger(1, elements.length)).fill(null).map(() => getRandomArrayElement(elements));
  return similarArray.filter((item, index) => similarArray.indexOf(item) === index)
}

export {getRandomFloat, getRandomInteger, getRandomArrayElement, getRandomArray};
