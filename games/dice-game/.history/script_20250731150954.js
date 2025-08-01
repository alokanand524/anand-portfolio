$(document).ready(function () {
  const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  $('#roll-btn').click(function () {
    const playerRoll = Math.floor(Math.random() * 6);
    const computerRoll = Math.floor(Math.random() * 6);

    $('#player-dice').text(diceFaces[playerRoll]);
    $('#computer-dice').text(diceFaces[computerRoll]);

    let result = '';
    if (playerRoll > computerRoll) {
      result = 'You Win!';
      playerScore++;
    } else if (playerRoll < computerRoll) {
      result = 'Computer Wins!';
      computerScore++;
    } else {
      result = 'It\'s a Draw!';
    }

    $('#result-text').text(result);
    $('#player-score').text(playerScore);
    $('#computer-score').text(computerScore);

    round++;
    $('#history-log').prepend(
      `<li>🎯 Round ${round}: You ${diceFaces[playerRoll]} vs ${diceFaces[computerRoll]} → <strong>${result}</strong></li>`
    );
  });
});
