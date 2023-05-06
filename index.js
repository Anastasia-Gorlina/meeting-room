  const form = document.querySelector('form');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', event => {
    event.preventDefault();
    
    const inputs = event.target.elements;

    // проверяем день
    const selectedDate = new Date(inputs.date.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      errorMessage.textContent = 'Этот день уже прошёл';
      errorMessage.classList.add('error');
      return;
    }

    // проверяем время
    const timeStart = inputs.timeStart.value;
    const timeEnd = inputs.timeEnd.value;
    if (timeStart >= timeEnd) {
      errorMessage.textContent = 'Время окончания раньше времени начала';
      errorMessage.classList.add('error');
      return;
    } else {
      errorMessage.textContent = '';
      errorMessage.classList.remove('error');
    }

  // проверяем, заполнены ли все поля, кроме comment
  if (inputs.date.value.trim() === '' || inputs.timeStart.value.trim() === '' || inputs.timeEnd.value.trim() === '') {
    errorMessage.textContent = 'Пожалуйста, заполните все поля';
    errorMessage.classList.add('error');
    return;
  }

    const data = new FormData(event.target);
    const jsonData = JSON.stringify(Object.fromEntries(data.entries()));

    console.log(jsonData);
  });

  const resetButton = document.querySelector('button[type="reset"]');
  resetButton.addEventListener('click', () => {
    form.reset();
  });