'use strict';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
function secretKey() {
  return Math.trunc(Math.random() * 20) + 1;
}
function displayScore(guess, secretNumber, score) {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
  } else {
    displayMessage('YOU LOST HAHAHA');
  }
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretKey();
  displayMessage('Start guessing...');
  /*document.querySelector('.score').textContent =*/
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
let secretNumber = secretKey(); /* = Math.trunc(Math.random() * 20) + 1;*/
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //This code of block if player didnt enter any number
  if (!guess) {
    displayMessage('Please enter  your guess');
  }
  //If player is guess is correct
  else if (guess === secretNumber) {
    displayMessage('Congratulations! Correct guess');
    document.querySelector('.number').textContent = secretNumber;
    let score = Number(document.querySelector('.score').textContent);

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } //Refactoring the code //This will be excuted if the guess is !=secretNumber
  } else if (guess != secretNumber) {
    let score = Number(document.querySelector('.score').textContent);
    displayScore(guess, secretNumber, score);
  }
});
document.addEventListener('keydown', function (e) {});
