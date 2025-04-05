'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  }
});

// Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    activePlayer === 0
      ? (score0El.textContent = scores[0])
      : (score1El.textContent = scores[1]);
    // Check for winning
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  }
});

// New button
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
});
