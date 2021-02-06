const ERROR = 'Значение min должно быть больше 0 и меньше max!';
const CHECK_IN_OUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
const MAX_INTEGER = 100000 // Верхняя граница целого положительного числа для генерируемых временных данных
const QUANTITY_ADVERTS = 10;

// Утилитарные функции

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

// Генерация временных данных

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArray = (elements) => {
  const similarArray = new Array(getRandomInteger(1, elements.length)).fill(null).map(() => getRandomArrayElement(elements));
  return similarArray.filter((item, index) => similarArray.indexOf(item) === index)
}

const getAuthor = () => {
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
  }
}

const getLocation = () => {
  return {
    x: getRandomFloat(35.65, 35.7, 5),
    y: getRandomFloat(139.7, 139.8, 5),
  }
}

const getOffer = (location = getLocation()) => {
  return {
    title: 'Небольшая квартира в тихом районе Токио',
    address: location.x + ',' + location.y,
    price: getRandomInteger(1, MAX_INTEGER),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomInteger(1, MAX_INTEGER),
    guests: getRandomInteger(1, MAX_INTEGER),
    checkin: getRandomArrayElement(CHECK_IN_OUT),
    checkout: getRandomArrayElement(CHECK_IN_OUT),
    features: getRandomArray(FEATURES),
    description: 'Современный ремонт, высокие потолки, раздельный санузел и просторная кухня.',
    photos: getRandomArray(PHOTOS),
  }
}

const createAdvert = () => {
  return {
    author: getAuthor(),
    offer: getOffer(),
    location: getLocation(),
  };
};

const similarAdverts = new Array(QUANTITY_ADVERTS).fill(null).map(() =>  createAdvert())

// eslint-disable-next-line no-console
console.log(similarAdverts);
