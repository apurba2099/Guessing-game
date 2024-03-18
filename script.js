'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber); //testing tempo!
let score = 20;
let hiscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.screenInput').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number🙏!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎊Congratulations you won🎊';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#7FFF94';
    document.querySelector('.number').style.width = '18rem';
    document.querySelector('.message').style.backgroundColor = '#7FFF94';
    document.querySelectorAll('.btn').forEach(element => {
      element.style.backgroundColor = '#7FFF94';

      if (score > hiscore) {
        hiscore = score;
        document.querySelector('.hiscore').textContent = hiscore;
      }
    });
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔You Loss The Game!';
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelectorAll('.btn').forEach(element => {
        element.style.backgroundColor = 'red';
      });
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔You Loss The Game!';
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelectorAll('.btn').forEach(element => {
        element.style.backgroundColor = 'red';
      });
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelectorAll('.btn').forEach(element => {
    element.style.backgroundColor = 'yellow';
  });
  document.querySelector('body').style.backgroundColor = 'yellow';
  document.querySelector('.message').style.backgroundColor = 'white';
  document.querySelector('.screenInput').value = '';
  document.querySelector('.message').textContent = 'START GUESSING';
});
