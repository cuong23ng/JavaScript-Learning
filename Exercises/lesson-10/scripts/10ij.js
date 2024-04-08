let calculation;
if (!localStorage.getItem('calculation')) {
  calculation = '';
} else {
  calculation = localStorage.getItem('calculation');
}

if (calculation === '') {
  document.querySelector('.js-result').innerHTML = '0';
} else {
  document.querySelector('.js-result').innerHTML = calculation;
}

function updateCalculation(mathCharacter) {
  if (mathCharacter === '=') {
    calculation = eval(calculation);
  } else if (mathCharacter === '') {
    calculation = '';
    console.log('Cleared'); 
  } else {
    calculation += String(mathCharacter);
  }

  localStorage.setItem('calculation', calculation);
  console.log(calculation);

  if (calculation === '') {
    document.querySelector('.js-result').innerHTML = '0';
  } else {
    document.querySelector('.js-result').innerHTML = calculation;
  }
}