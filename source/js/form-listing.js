const stepButton = document.querySelector('.check-form__button');
const firstFormSlide = document.querySelector('.check-form__container-first');
const lastFormSlide = document.querySelector('.check-form__container-last');
const backSlide = document.querySelector('.check-form__back');
let fio = document.querySelector('#fio');
let fioValue = document.querySelector('#fio-value');
let birthDate = document.querySelector('#date');
let birthDateValue = document.querySelector('#birth-date');
let region = document.querySelector('#region');
let regionOptions = region.querySelectorAll('option');
let regionValue = document.querySelector('#region-value');
let passport = document.querySelector('#passport');
let passportValue = document.querySelector('#passport-value');
const formBottomDesc = document.querySelector('.check-form__law');
let fields = document.querySelectorAll('.field');
let required = document.querySelectorAll('.req');
let selectRegion = document.querySelector('#region');
let selectCustom = document.querySelector('.custom-select');
let selectSelected = document.querySelector('.select-selected');

const getFormValue = () => {
  fioValue.textContent = fio.value;
  birthDateValue.textContent = birthDate.value;
  passportValue.textContent = passport.value;

  for (let i = 0; i < regionOptions.length; i++) {
    if (regionOptions[i].selected) {
      regionValue.textContent = regionOptions[i].value;
    }
  }
};

const formSwipeHandler = () => {
  firstFormSlide.style.display = 'none';
  lastFormSlide.style.display = 'block';
  getFormValue();
  formBottomDesc.classList.add('visually-hidden');
};

const formBackHandler = (evt) => {
  evt.preventDefault();
  lastFormSlide.style.display = 'none';
  firstFormSlide.style.display = 'block';
  formBottomDesc.classList.remove('visually-hidden');
};

backSlide.addEventListener('click', formBackHandler);


const selectValidation = () => {
  if (selectRegion.options[0].selected) {
    selectCustom.style.borderColor = '#' + 'D60000';
  } else {
    selectCustom.style.borderColor = '';
  }
};


const passportValidation = () => {
  if (passport.value.length < 12) {
    debugger
     passport.style.borderColor = '#' + 'D60000';
  } else {
    passport.style.borderColor = '';
  }
};


const formValidation = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].style.borderColor = '#' + 'D60000';
      required[i].style.color = '#' + 'D60000';
      required[i].style.opacity = '1';
      stepButton.removeEventListener('click', formSwipeHandler);
    } else {
      fields[i].style.borderColor = '';
      required[i].style.color = '#' + '333333';
      required[i].style.opacity = '0.5';
    }
    stepButton.addEventListener('click', formSwipeHandler);
  }
};

stepButton.addEventListener('click', formValidation);
stepButton.addEventListener('click', selectValidation);
stepButton.addEventListener('click', passportValidation);


// Валидация фио
$('#fio').on('keypress', function() {
  var that = this;

  setTimeout(function() {
    var res = /[^а-я ]/g.exec(that.value);
    that.value = that.value.replace(res, '');
    fio.setAttribute('placeholder', 'Только русские символы и пробелы')
  }, 0);
});


const selectChange = () => {
  if (!selectRegion.options[0].selected) {
    selectSelected.style.color = 'black';
    selectCustom.style.background = 'white';
    selectSelected.style.background = 'white';
    selectCustom.style.borderColor = '#' + '333333';
  }
};

selectSelected.addEventListener('click', selectChange);
