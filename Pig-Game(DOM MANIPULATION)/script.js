'use strict';
const currentPlayer0 = document.querySelector('.player--0');
const currentPlayer1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //Gets the element not the value;
const score1El = document.getElementById('score--1');
const currentScr0 = document.getElementById('current--0');
const currentScr1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let playingGame, scores, currentScore, activePlayer;
const init = function () {
  activePlayer = 0;
  playingGame = true;
  currentScore = 0;
  scores = [0, 0];

  diceEl.classList.add('hidden');
  currentPlayer0.classList.add('player--active');
  currentPlayer1.classList.remove('player--active');
  currentPlayer0.classList.remove('player--winner');
  currentPlayer1.classList.remove('player--winner');
  for (let i = 0; i < 2; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;
  }
};

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentPlayer0.classList.toggle('player--active');
  currentPlayer1.classList.toggle('player--active');
}
//This array will hold the score of both players as 0 represents player1 aand 1 represents player 1

//Starting conditions

init();
//roll click functionality
rollBtn.addEventListener('click', function () {
  if (playingGame) {
    //1.Generate a random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display the generated dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //If 1 switch player
    if (dice !== 1) {
      //add to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //1.first add the current score to the active player global score
  if (playingGame) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playingGame = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
}); //2.check if the current score of the active players is 100 or not
/*if (scores[activePlayer] >= 100) {
document.querySelector(`.score--${activePlayer}`).textContent = 'WNNER';
} else {
switchPlayer();
}*/
//3switch Player

btnNewGame.addEventListener('click', init); //This will reset the game to the starting point..
