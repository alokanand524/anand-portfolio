const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
let round = 0;

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

function playRound() {
  round++;

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

  $('#player-total').text(`Total: ${playerTotal}`);
  $('#computer-total').text(`Total: ${computerTotal}`);

  let resultMsg = '';
  if (playerTotal > computerTotal) {
    resultMsg = '🎉 You win!';
  } else if (playerTotal < computerTotal) {
    resultMsg = '😢 Computer wins!';
  } else {
    resultMsg = '🤝 It\'s a tie!';
  }

  $('#result').text(resultMsg);
  $('#history-log').prepend(
    `<li>Round ${round}: You ${playerTotal} - ${computerTotal} Computer → ${resultMsg}</li>`
  );
}

$(document).ready(function () {
  $('#roll-btn').click(playRound);
});
