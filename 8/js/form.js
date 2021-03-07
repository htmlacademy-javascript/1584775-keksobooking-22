import {showErrorMessageSend, showSuccessMessageSend} from './popup-message.js';
import {sendData} from './server.js';
import {resetMap} from './map.js';

const form = document.querySelector('.ad-form');
const fieldsetsSelects = document.querySelectorAll('fieldset, select');
const filter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

form.classList.add('ad-form--disabled');
filter.classList.add('map__filters--disabled')
fieldsetsSelects.forEach((value) => {
  value.setAttribute('disabled', 'disabled')
});

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled')
  fieldsetsSelects.forEach((value) => {
    value.removeAttribute('disabled')
  });
}

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

export {activateForm};
