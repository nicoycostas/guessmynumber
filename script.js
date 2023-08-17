'use strict';

let initial_score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // get the value from the input field and convert it to number
  const input_number = Number(document.querySelector('.guess').value);
  let random_number = Math.floor(Math.random() * 20);

  //   if the random number is zero then increase by one
  if (random_number === 0) {
    console.log(random_number);
    random_number++;
  }

  document.querySelector('.number').textContent = random_number;
  //   if the input number matches the random number
  if (input_number === random_number) {
    document.body.style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'Correct Answer!!!';

    // check first if the score is less than 20 to not increment after 20
    if (initial_score < 20) {
      initial_score++;
      document.querySelector('.score').textContent = initial_score;

      //implementing highscore
      if (initial_score > highscore) {
        highscore = initial_score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    //  if the input number DOES NOT match the random number
  } else {
    document.body.style.backgroundColor = '#222';

    // decrease higher score if is greater than 0
    if (initial_score > 0) {
      initial_score = initial_score - 1;
      document.querySelector('.score').textContent = initial_score;

      // CHECKING IF THE INPUT NUMBER IT'S TOO LOW OR TOO HIGH
      if (input_number > random_number) {
        document.querySelector('.message').textContent = 'Too high!!!';
      } else if (input_number < random_number) {
        document.querySelector('.message').textContent = 'Too Low!!!';
      }
    }
  }

  // if the score is zero
  if (initial_score == 0) {
    document.body.style.backgroundColor = 'red';
    document.querySelector('.message').textContent = 'GAME OVER';
    document.querySelector('.check').disabled = true;
  } else if (initial_score == 20) {
    document.querySelector('.message').textContent = 'YOU WON THE GAME';
  }
});

// RESTART GAME
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
