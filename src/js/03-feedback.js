import throttle from 'lodash.throttle';

//пошук селекторів
const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textarea = document.querySelector('textarea');

// добавляння подій
feedbackForm.addEventListener('input', throttle(onInputDataValue, 500));
feedbackForm.addEventListener('submit', onFeedbackSubmit);

//обєкт який зберігає в собі данні інпут
const dataValue = {
  email: '',
  message: '',
};

populateInputVale();

// функція яка збирає даннія в локал сторіж та передає їх в dataValue
function onInputDataValue(e) {
  dataValue[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataValue));
}

// функція передає збереженні данні з локал скховища в текстові поля
function populateInputVale() {
  const saveInputValue = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (saveInputValue) {
    inputEmail.value = saveInputValue.email;
    textarea.value = saveInputValue.message;

    dataValue.email = saveInputValue.email;
    dataValue.message = saveInputValue.message;
  }
}

// відміняю перезавантаження сторінки, роблю перевірку на пусті поля
// збираю данні, після ресета очищаю локальне сховище, данні в консоль
function onFeedbackSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    return alert('All fields must be filled!');
  }
  const formData = {
    email,
    message,
  };
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();

  console.log(formData);
}
