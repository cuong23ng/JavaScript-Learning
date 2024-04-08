let alreadyButton = false;

function turn (className) {
  const buttonElement = document.querySelector(className);

  if (!buttonElement.classList.contains('is-toggled')) {
    if (alreadyButton === false) {
      buttonElement.classList.add('is-toggled');
      alreadyButton = true;
    }
  } else {
    buttonElement.classList.remove('is-toggled');
    alreadyButton = false;
  }
}