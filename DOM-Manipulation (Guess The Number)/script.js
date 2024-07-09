'use strict';
/*
document.querySelector('.message').textContent = "You still dey guess?"
console.log(document.querySelector('.message'))

document.querySelector('.number').textContent = 13; //This is used to select the content of an HTML element
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 12; //This is used to get the value of an input field or to set the value of a input filed
console.log(document.querySelector('.guess').value) */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //When there's no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is different from the secretnumber
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!';

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    }
    //     else if (guess < secretNumber) {
    //         document.querySelector('.message').textContent = "Too low!"
    //         if (score > 1) {
    //             score--
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = "You lost the game!"
    //             score = 0
    //             document.querySelector('.score').textContent = score
    //         }

    //         //When guess is too high
    //     } else if (guess > secretNumber) {
    //         document.querySelector('.message').textContent = "Too high!"
    //         if (score > 1) {
    //             score--
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = "You lost the game!"
    //             score = 0
    //             document.querySelector('.score').textContent = score
    //         }
  }
});

//Resets the entire game back to it's default state
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
});
