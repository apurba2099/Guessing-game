'use strict';
// check js
/*document.querySelector('.screenInput').value = 30;
document.querySelector('.message').textContent = 'start guessing...';*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.screenInput').value);
  document.querySelector('.number').textContent = guess;
  console.log(guess);
  if(!guess){
    document.querySelector('.message').textContent = "not a number"
  }
  else if(guess >= 20){
    document.querySelector('.message').textContent = "upper number!"
    document.querySelector('.number').textContent = "unable!"
  }
  else{
    document.querySelector('.message').textContent = "Start Guessing..."
  }
});
