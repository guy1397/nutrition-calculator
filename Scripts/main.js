// Select the appropriate calculator
function calculator(sport = '', fat = '') {
  console.log('calculating');
}

// Run function
// const variable is to capture value from function
const calculatorResult = calculator(/* add in values sport, bodyfat */);

const button = document.querySelector('.btn');
button.addEventListener('click', calculator);
