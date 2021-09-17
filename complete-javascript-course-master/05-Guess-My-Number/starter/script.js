'use strict';
let highScore = 0;
let number = Math.trunc(Math.random() * 20 + 1);
let score = 5;
//document.querySelector('.number').textContent = number;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 correct number';
    score += 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }

  } else if (guess > number && guess < 20) {
    if (score > 0) {
      document.querySelector('.message').textContent = '❌ too high';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿 You lost';
    }
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < number && guess < 20) {
    if (score > 0) {
      document.querySelector('.message').textContent = '❌ you Low';
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.number').style.width = '30rem';
    } else {
      document.querySelector('.message').textContent = '😿 You lost';
    }
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = '❌ Wrong Number';
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
    } else {
      document.querySelector('.message').textContent = '😿 You lost';
    }
  }
  if (score == 0) {
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  number = Math.trunc(Math.random() * 20 + 1);
  //document.querySelector('.number').textContent = number;
  document.querySelector('.message').textContent = 'Guess My Number!';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor='gray';
});
