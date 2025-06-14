const button = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');

button.addEventListener('click', () => {
  // Toggle the text visibility
  hiddenText.classList.toggle('show');

  // Update the button label
  if (hiddenText.classList.contains('show')) {
    button.textContent = 'აკეცეთ';
  } else {
    button.textContent = 'ჩამოშალეთ';
  }
});
