const userScoreEl = document.querySelector('#user-score');
const compScoreEl = document.querySelector('#comp-score');
const finalResultEl = document.querySelector('#anounce h3');

const choices = document.querySelectorAll('.choice');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissoresBtn = document.querySelector('#scissores');

let finalResult = '';
let userChoice;
let compChoice;

choices.forEach((button) =>
  button.addEventListener('click', () => {
    userChoice = button.textContent;
    compChoice = compTurn();
    finalResult = checkWiner(userChoice, compChoice);
    setScores(finalResult);
    finalResultEl.textContent = finalResult;
  })
);

function compTurn() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissores';
      break;
  }
}

function checkWiner(user, comp) {
  if (user == comp) {
    return " it's a  Draw";
  } else if (user == 'Paper') {
    return comp == 'Rock' ? 'You Win' : 'You  lose';
  } else if (user == 'Rock') {
    return comp == 'Scissores' ? 'You Win' : 'You  lose';
  } else if (user == 'Scissores') {
    return comp == 'Paper' ? 'You Win' : 'You  lose';
  }
}

function setScores(finalResult) {
  if (finalResult == 'You Win') {
    console.log(parseInt(compScoreEl.textContent));
    userScoreEl.textContent = 1 + parseInt(userScoreEl.textContent);
  } else if (finalResult == 'You  lose') {
    compScoreEl.textContent = 1 + parseInt(compScoreEl.textContent);
  }
}
