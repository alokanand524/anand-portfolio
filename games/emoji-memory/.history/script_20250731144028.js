let rounds = 5;
let count = 0;
let startTime, endTime;
let times = [];

function randomPosition() {
  const maxW = $(window).width() - 100;
  const maxH = $(window).height() - 100;
  const left = Math.floor(Math.random() * maxW);
  const top = Math.floor(Math.random() * maxH);
  $('#game-box').css({ top: top + 'px', left: left + 'px' });
}

function showBox() {
  randomPosition();
  $('#game-box').fadeIn();
  startTime = new Date().getTime();
}

function startRound() {
  $('#message').text('Wait for it...');
  const delay = Math.floor(Math.random() * 2000) + 1000; // 1-3s
  setTimeout(showBox, delay);
}

function endGame() {
  $('#game-box').hide();
  $('#message').text('Game Over!');
  const avg =
    times.reduce((a, b) => a + b, 0) / times.length;
  $('#results').append(`<li><strong>Average Time:</strong> ${avg.toFixed(2)} ms</li>`);
  $('#restart-btn').show();
}

$(document).ready(function () {
  $('#start-btn').click(function () {
    times = [];
    count = 0;
    $('#results').empty();
    $('#start-btn').hide();
    $('#restart-btn').hide();
    startRound();
  });

  $('#restart-btn').click(function () {
    times = [];
    count = 0;
    $('#results').empty();
    $('#restart-btn').hide();
    $('#message').text('Tap the box as fast as you can!');
    startRound();
  });

  $('#game-box').click(function () {
    endTime = new Date().getTime();
    const reaction = endTime - startTime;
    times.push(reaction);
    $('#results').append(`<li>Round ${count + 1}: ${reaction} ms</li>`);
    $('#game-box').fadeOut();

    count++;
    if (count < rounds) {
      setTimeout(startRound, 1000);
    } else {
      endGame();
    }
  });
});
