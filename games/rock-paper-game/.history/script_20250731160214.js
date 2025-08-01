const choices = ['🪨 Rock', '📄 Paper', '✂️ Scissors'];
const taunts = [
  "You're gonna need a bigger brain! 🧠",
  "Is that the best you can do? 😏",
  "Too easy! Try harder next time.",
  "I’ve beaten humans at chess… this is nothing! ♟️",
  "Oops! Did I do that? 🤖",
  "AI 1 - Human 0 🎯",
  "Better luck next click!",
  "I feel no remorse... just victory. 💀",
  "That's not how you win wars. 🪖",
  "Rock beats your dreams! 💥"
];

let playerScore = 0;
let computerScore = 0;
let round = 0;

function saveToLocal() {
  localStorage.setItem('rps_playerScore', playerScore);
  localStorage.setItem('rps_computerScore', computerScore);
  localStorage.setItem('rps_historyLog', $('#history-log').html());
}

function loadFromLocal() {
  if (localStorage.getItem('rps_playerScore')) {
    playerScore = parseInt(localStorage.getItem('rps_playerScore'));
    computerScore = parseInt(localStorage.getItem('rps_computerScore'));
    $('#history-log').html(localStorage.getItem('rps_historyLog'));
  }
  updateScores();
}

function updateScores() {
  $('#player-score').text(`Score: ${playerScore}`);
  $('#computer-score').text(`Score: ${computerScore}`);
}

function getResult(player, computer) {
  if (player === computer) return 'tie';
  if (
    (player === 0 && computer === 2) ||
    (player === 1 && computer === 0) ||
    (player === 2 && computer === 1)
  ) {
    return 'win';
  }
  return 'lose';
}

function playRound(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3);
  round++;

  const result = getResult(playerChoice, computerChoice);
  const aiTaunt = taunts[Math.floor(Math.random() * taunts.length)];

  let outcomeText = '';
  if (result === 'win') {
    playerScore++;
    outcomeText = `🎉 You win! ${aiTaunt}`;
  } else if (result === 'lose') {
    computerScore++;
    outcomeText = `😢 You lose! ${aiTaunt}`;
  } else {
    outcomeText = `🤝 It's a tie! ${aiTaunt}`;
  }

  $('#result').text(outcomeText);
  $('#history-log').prepend(
    `<li>Round ${round}: You chose ${choices[playerChoice]} vs ${choices[computerChoice]} → ${outcomeText}</li>`
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

  $('#rock-btn').click(() => playRound(0));
  $('#paper-btn').click(() => playRound(1));
  $('#scissors-btn').click(() => playRound(2));
});
