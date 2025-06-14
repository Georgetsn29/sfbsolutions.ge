const button = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');

button.addEventListener('click', () => {
  hiddenText.classList.toggle('show');

  if (hiddenText.classList.contains('show')) {
    button.textContent = 'აკეცეთ';
  } else {
    button.textContent = 'ჩამოშალეთ';
  }
});
