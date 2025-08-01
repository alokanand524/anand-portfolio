let colors = ['red', 'green', 'blue', 'yellow'];
let currentColor = '';
let score = 0;
let interval = 2000;
let timer;

function changeBackground() {
  currentColor = colors[Math.floor(Math.random() * colors.length)];
  $('body').css('background', currentColor);
  $('#status').text('Match it now!');
}

function startRound() {
  changeBackground();
  timer = setTimeout(() => {
    gameOver("⏱️ Time's up!");
  }, interval);
}

function gameOver(message) {
  clearTimeout(timer);
  $('#status').text(`Game Over! ${message} Final Score: ${score}`);
  $('body').css('background', '#fff');
  $('.color-btn').prop('disabled', true);
}

$(document).ready(function () {
  startRound();

  $('.color-btn').click(function () {
    const selected = $(this).data('color');
    if (selected === currentColor) {
      clearTimeout(timer);
      score++;
      $('#score').text(score);

      // Increase speed every 3 rounds
      if (score % 3 === 0 && interval > 600) {
        interval -= 200;
      }

      startRound();
    } else {
      gameOver("❌ Wrong Color!");
    }
  });
});
