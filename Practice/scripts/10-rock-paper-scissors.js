if (!localStorage.getItem('score')) {
  localStorage.setItem('score', '{"wins":0,"losses":0,"ties":0}');
}
const score = JSON.parse(localStorage.getItem('score'));
//const does not define a constant value. It defines a constant REFERENCE to a value.

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie.'
    } else if (computerMove === 'rock') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
    
  } else {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  if (result === 'You win.')  {
    score.wins += 1; //Way to add a property to object
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  //localStorage.removeItem('score');
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`; 
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const ramdonNamber = Math.random();

  let computerMove = '';

  if (ramdonNamber >= 0 && ramdonNamber < 1 / 3) {
    computerMove = 'rock';
  } else if ((ramdonNamber >= 1 / 3) && (ramdonNamber < 2 / 3)) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}