const form = document.querySelector('.ad-form');
const fieldsetsSelects = document.querySelectorAll('fieldset, select');
const filter = document.querySelector('.map__filters');

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

export {activateForm};
