const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
let round = 0;
let playerScore = 0;
let computerScore = 0;

const rollSound = document.getElementById('roll-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

function rollDie() {
  return Math.floor(Math.random() * 6);
}

function animateDice($dice) {
  $dice.addClass('animate');
  setTimeout(() => $dice.removeClass('animate'), 300);
}

function updateDice($elem, roll) {
  animateDice($elem);
  $elem.text(diceFaces[roll]);
}

function updateScoreBoard() {
  $('#player-total').text(`Total: ${playerScore}`);
  $('#computer-total').text(`Total: ${computerScore}`);
}

function saveHistory() {
  const historyItems = $('#history-log').html();
  localStorage.setItem('diceHistory', historyItems);
  localStorage.setItem('playerScore', playerScore);
  localStorage.setItem('computerScore', computerScore);
}

function loadHistory() {
  const savedHistory = localStorage.getItem('diceHistory');
  const savedPlayer = localStorage.getItem('playerScore');
  const savedComputer = localStorage.getItem('computerScore');

  if (savedHistory) $('#history-log').html(savedHistory);
  if (savedPlayer) playerScore = parseInt(savedPlayer);
  if (savedComputer) computerScore = parseInt(savedComputer);
  updateScoreBoard();
}

function playRound() {
  round++;
  rollSound.play();

  const p1 = rollDie();
  const p2 = rollDie();
  const c1 = rollDie();
  const c2 = rollDie();

  const playerTotal = p1 + p2 + 2;
  const computerTotal = c1 + c2 + 2;

  updateDice($('#player-dice1'), p1);
  updateDice($('#player-dice2'), p2);
  updateDice($('#computer-dice1'), c1);
  updateDice($('#computer-dice2'), c2);

  let resultMsg = '';
  if (playerTotal > computerTotal) {
    resultMsg = '🎉 You win!';
    playerScore++;
    winSound.play();
  } else if (playerTotal < computerTotal) {
    resultMsg = '😢 Computer wins!';
    computerScore++;
    loseSound.play();
  } else {
    resultMsg = '🤝 It\'s a tie!';
  }

  $('#result').text(resultMsg);
  $('#history-log').prepend(
    `<li>Round ${round}: You ${playerTotal} - ${computerTotal} Computer → ${resultMsg}</li>`
  );

  updateScoreBoard();
  saveHistory();
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
  loadHistory();
  updateScoreBoard();

  $('#roll-btn').click(playRound);
});
