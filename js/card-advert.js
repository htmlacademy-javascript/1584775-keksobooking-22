import {similarAdverts} from './temporary-data.js';

const mapWindow = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const showAdvert = (adverts) => {

  const defineType = (type) => {
    let result = false;
    let definedType;
    while (result === false) {
      result = (type === 'flat') ? (definedType = 'Квартира') : true;
      result = (type === 'bungalow') ? (definedType = 'Бунгало') : true;
      result = (type === 'house') ? (definedType = 'Дом') : true;
      result = (type === 'palace') ? (definedType = 'Дворец') : true;
    }
    return definedType;
  }

  const removeFeature = (features) => {
    const featureList = advertElement.querySelector('.popup__features');

    if (features.includes('wifi') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--wifi'))
    }

    if (features.includes('dishwasher') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--dishwasher'))
    }

    if (features.includes('parking') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--parking'))
    }

    if (features.includes('washer') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--washer'))
    }

    if (features.includes('elevator') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--elevator'))
    }

    if (features.includes('conditioner') === false) {
      featureList.removeChild(featureList.querySelector('.popup__feature--conditioner'))
    }
  }

  const getPhoto = (photos) => {
    const photoElement = advertElement.querySelector('.popup__photos').querySelector('.popup__photo');

    photoElement.src = photos[0];

    for (let i = 1; i < photos.length; i++) {
      advertElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${photos[i]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    }
  }

  const advertElement = cardTemplate.cloneNode(true);
  mapWindow.appendChild(advertElement);
  advertElement.querySelector('.popup__title').textContent = adverts.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = adverts.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = adverts.offer.price + '₽/ночь';
  advertElement.querySelector('.popup__type').textContent = defineType(adverts.offer.type);
  advertElement.querySelector('.popup__text--capacity').textContent = `${adverts.offer.rooms} комнаты для ${adverts.offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${adverts.offer.checkin}, выезд до ${adverts.offer.checkout}`;
  removeFeature(adverts.offer.features);
  advertElement.querySelector('.popup__description').textContent = adverts.offer.description;
  if (adverts.offer.photos.length > 1) {
    getPhoto(adverts.offer.photos);
  } else {
    advertElement.querySelector('.popup__photos').querySelector('.popup__photo').src = adverts.offer.photos;
  }
  advertElement.querySelector('.popup__avatar').src = adverts.author.avatar;
}

showAdvert(similarAdverts[0]);






