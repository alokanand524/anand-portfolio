const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const rollSound = document.getElementById('roll-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

function rollDie() {
  // Roll returns value from 0-5
  return Math.floor(Math.random() * 6);
}

function updateDice($elem, roll) {
  $elem.addClass('animate');
  $elem.text(diceFaces[roll]);
  setTimeout(() => $elem.removeClass('animate'), 300);
}

function updateScores() {
  $('#player-score').text(`Score: ${playerScore}`);
  $('#computer-score').text(`Score: ${computerScore}`);
}

function saveToLocal() {
  localStorage.setItem('playerScore', playerScore.toString());
  localStorage.setItem('computerScore', computerScore.toString());
  localStorage.setItem('historyLog', $('#history-log').html());
}

function loadFromLocal() {
  if (localStorage.getItem('playerScore')) {
    playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
    computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
    const historyData = localStorage.getItem('historyLog');
    if (historyData) {
      $('#history-log').text('').append(historyData);
    }
  }
  updateScores();
}

function playRound() {
  rollSound.play();
  round++;

  const playerRoll = rollDie();
  const computerRoll = rollDie();

  // Show dice faces (index from 0)
  updateDice($('#player-dice'), playerRoll);
  updateDice($('#computer-dice'), computerRoll);

  // Convert roll to real values (1–6)
  const playerValue = playerRoll + 1;
  const computerValue = computerRoll + 1;

  let result = '';
  if (playerValue > computerValue) {
    playerScore++;
    winSound.play();
    result = '🎉 You win!';
  } else if (playerValue < computerValue) {
    computerScore++;
    loseSound.play();
    result = '😢 Computer wins!';
  } else {
    result = '🤝 Tie!';
  }

  $('#result').text(result);
  $('#history-log').prepend(
    `<li>Round ${round}: You ${diceFaces[playerRoll]} (${playerValue}) vs ${diceFaces[computerRoll]} (${computerValue}) → ${result}</li>`
  );

  updateScores();
  saveToLocal();
}

function setupDarkMode() {
  const toggle = $('#dark-mode-toggle');
  const darkPref = localStorage.getItem('darkMode') === 'true';
  if (darkPref) {
    $('body').addClass('dark');
    toggle.prop('checked', true);
  }

  toggle.change(function () {
    $('body').toggleClass('dark');
    localStorage.setItem('darkMode', $(this).is(':checked'));
  });
}

$(document).ready(function () {
  setupDarkMode();
  loadFromLocal();
  $('#roll-btn').click(playRound);
});
