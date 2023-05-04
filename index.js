const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);
  const jsonData = JSON.stringify(Object.fromEntries(data.entries()));

  console.log(jsonData);
});

form.addEventListener('reset', event => {
  event.preventDefault();

  form.reset();
});