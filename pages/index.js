  const form = document.querySelector('form');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', event => {
    event.preventDefault();
    
    const inputs = event.target.elements;

      // проверяем, заполнены ли все поля, кроме comment
  if (inputs.date.value.trim() === '' || inputs.timeStart.value.trim() === '' || inputs.timeEnd.value.trim() === '') {
    inputs.date.classList.add('error');
    inputs.timeStart.classList.add('error');
    inputs.timeEnd.classList.add('error');
    return;
  } else {
    inputs.date.classList.remove('error');
    inputs.timeStart.classList.remove('error');
    inputs.timeEnd.classList.remove('error');
  }

    // проверяем день
    const selectedDate = new Date(inputs.date.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      inputs.date.classList.add('error');
      return;
    } else {
      inputs.date.classList.remove('error');
    }

    // проверяем время
    const timeStart = inputs.timeStart.value;
    const timeEnd = inputs.timeEnd.value;
    if (timeStart >= timeEnd) {
      inputs.timeStart.classList.add('error');
      inputs.timeEnd.classList.add('error');
      return;
    } else {
      inputs.timeStart.classList.remove('error');
      inputs.timeEnd.classList.remove('error');
    }

    errorMessage.textContent = '';
    const data = new FormData(event.target);
    const jsonData = JSON.stringify(Object.fromEntries(data.entries()));

    console.log(jsonData);
  });

  const resetButton = document.querySelector('button[type="reset"]');
  resetButton.addEventListener('click', () => {
    form.reset();
  });