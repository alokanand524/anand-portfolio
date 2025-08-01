const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const rollSound = document.getElementById('roll-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

function rollDie() {
  return Math.floor(Math.random() * 6);
}

function updateDice($elem, roll) {
  $elem.addClass('animate').text(diceFaces[roll]);
  setTimeout(() => $elem.removeClass('animate'), 300);
}

function updateScores() {
  $('#player-score').text(`Score: ${playerScore}`);
  $('#computer-score').text(`Score: ${computerScore}`);
}

function saveToLocal() {
  localStorage.setItem('playerScore', playerScore);
  localStorage.setItem('computerScore', computerScore);
  localStorage.setItem('historyLog', $('#history-log').html());
}

function loadFromLocal() {
  if (localStorage.getItem('playerScore')) {
    playerScore = parseInt(localStorage.getItem('playerScore'));
    computerScore = parseInt(localStorage.getItem('computerScore'));
    $('#history-log').html(localStorage.getItem('historyLog'));
  }
  updateScores();
}

function playRound() {
  rollSound.play();
  round++;

  const playerRoll = rollDie();
  const computerRoll = rollDie();

  updateDice($('#player-dice'), playerRoll);
  updateDice($('#computer-dice'), computerRoll);

  let result = '';
  if (playerRoll > computerRoll) {
    playerScore++;
    winSound.play();
    result = '🎉 You win!';
  } else if (playerRoll < computerRoll) {
    computerScore++;
    loseSound.play();
    result = '😢 Computer wins!';
  } else {
    result = '🤝 Tie!';
  }

  $('#result').text(result);
  $('#history-log').prepend(
    `<li>Round ${round}: You ${diceFaces[playerRoll]} vs ${diceFaces[computerRoll]} Computer → ${result}</li>`
  );

  updateScores();
  saveToLocal();
}

// function setupDarkMode() {
//   const toggle = $('#dark-mode-toggle');
//   const darkPref = localStorage.getItem('darkMode') === 'true';
//   if (darkPref) {
//     $('body').addClass('dark');
//     toggle.prop('checked', true);
//   }

//   toggle.change(function () {
//     $('body').toggleClass('dark');
//     localStorage.setItem('darkMode', $(this).is(':checked'));
//   });
// }

// $(document).ready(function () {
//   setupDarkMode();
//   loadFromLocal();
//   $('#roll-btn').click(playRound);
// });
