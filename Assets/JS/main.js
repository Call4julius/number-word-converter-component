'use strict';

const form = document.getElementById('form');
const input = document.getElementById('amount');
const deposit = document.querySelector('.deposit-btn');

//Get current year.
document.querySelector('.current-year').innerText = new Date().getFullYear();

//Prevent form submission default action.
form.addEventListener('submit', function (event) {
  event.preventDefault();
});

input.addEventListener('input', (e) => {
  // Ensures only numbers can be entered in the text-input field.
  if (isNaN(input.value.slice(-1)))
    return (input.value = input.value.slice(0, -1));

  // Prevent pasting spaces and remove all spaces from the value.
  if (input.value.includes(' '))
    return (input.value = input.value.replace(/\s+/g, ''));

  const inputArray = input.value.replace(/,/g, '').split('').reverse();
  const commaInputArray = [];

  inputArray.forEach((_, i) => {
    if (i % 3 === 0 && i > 0) commaInputArray.unshift(',');
    commaInputArray.unshift(inputArray[i]);
  });

  input.value = commaInputArray.join('');
});
