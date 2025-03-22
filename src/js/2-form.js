const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

const STORAGE_KEY = 'feedback-form-state';

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
  const parseData = JSON.parse(saveData);

  formData.email = parseData.email;
  formData.message = parseData.message;

  form.elements['email'].value = formData.email;
  form.elements['message'].value = formData.message;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
  }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
