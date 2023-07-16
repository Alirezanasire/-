const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      input.value = eval(input.value);
    } else if (button.value === 'C') {
      input.value = '';
    } else if (button.value === 'sqrt') {
      input.value = Math.sqrt(input.value);
    } else if (button.value === 'x2') {
      input.value = Math.pow(input.value, 2);
    } else if (button.value === '1/x') {
      input.value = 1 / input.value;
    } else {
      input.value += button.value;
    }
  });
});