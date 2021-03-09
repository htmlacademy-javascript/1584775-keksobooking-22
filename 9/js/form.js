import {showErrorMessageSend, showSuccessMessageSend} from './popup-message.js';
import {sendData} from './server.js';
import {resetMap} from './map.js';

const PRICE_BUNGALOW = 0;
const PRICE_FLAT = 1000;
const PRICE_HOUSE = 5000;
const PRICE_PALACE = 10000;

const form = document.querySelector('.ad-form');
const fieldsetsSelects = document.querySelectorAll('fieldset, select');
const filter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

/* Неактивное состояние формы */

form.classList.add('ad-form--disabled');
filter.classList.add('map__filters--disabled');
fieldsetsSelects.forEach((value) => {
  value.setAttribute('disabled', 'disabled')
});

/* Активное состояние формы */

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled')
  fieldsetsSelects.forEach((value) => {
    value.removeAttribute('disabled')
  });
}

/* Валидация формы */

const onSelectType = () => {
  price.value = '';

  switch (type.value) {
    case 'flat':
      return [price.placeholder = PRICE_FLAT] [price.min = PRICE_FLAT];
    case 'bungalow':
      return [price.placeholder = PRICE_BUNGALOW] [price.min = PRICE_BUNGALOW];
    case 'house':
      return [price.placeholder = PRICE_HOUSE] [price.min = PRICE_HOUSE];
    case 'palace':
      return [price.placeholder = PRICE_PALACE] [price.min = PRICE_PALACE];
  }
}

const onSelectCheckInOut = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
}

const formValidation = () => {
  type.addEventListener('change', onSelectType);
  timeIn.addEventListener('change', onSelectCheckInOut);
  timeOut.addEventListener('change', onSelectCheckInOut);
}

/* Отправка и сброс формы */

const resetForm = () => {
  form.reset();
  resetMap();
}

const handleSuccess = () => {
  resetForm();
  showSuccessMessageSend();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(handleSuccess, showErrorMessageSend, formData);
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetForm()
})

export {activateForm, formValidation};
