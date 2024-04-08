function handleCostKeydown(event) {
  if (event.key === 'Enter') { //event doesn't exist in function
    calculateTotal();
  } 
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  
  const announceElement = document.querySelector('.js-total-cost');
  if (cost < 0) {
    announceElement.innerHTML = 'Error: cost cannot be less than $0';
    announceElement.classList.add('announcement');
  } else {
    if (cost < 40) {
      cost = cost + 10;
    }

    announceElement.classList.remove('announcement');
    announceElement.innerHTML = `$${cost}`;
    }
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else  {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}
