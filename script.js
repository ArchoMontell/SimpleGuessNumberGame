'use strict';

let expectedNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkButton = document.querySelector('.check');
const resultField = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');

function showMessage(message) {
  resultField.textContent = message;
}

function putText(direction, text) {
  direction.textContent = text;
}

function checkAnswer() {
  const inputNumber = Number(document.querySelector('.guess').value);
  if (!inputNumber) {
    showMessage('😡 There is no number entered!');
  } else if (inputNumber !== expectedNumber) {
    if (score > 0) {
      showMessage(
        inputNumber > expectedNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      putText(scoreField, score);
    } else {
      showMessage('🥺 You Lost...');
    }
  } else {
    showMessage('🍾 Correct Answer');
    if (score > highScore) {
      highScore = score;
      putText(highScoreField, highScore);
    }
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    putText(number, inputNumber);
  }
}

function reloadGame() {
  expectedNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  body.style.backgroundColor = '#222';
  resultField.textContent = '';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  putText(scoreField, '20');
  putText(number, '?');
}
