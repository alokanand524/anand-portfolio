const emojis = ["🍕", "🎮", "🚀", "🐶", "🌈", "⚽", "🎧", "🍩"];
let deck = [...emojis, ...emojis];
let flippedCards = [];
let matched = 0;
let moves = 0;
let timer;
let seconds = 0;
let timerStarted = false;

$(document).ready(function () {
  shuffle(deck);
  createBoard();

  $("#reset").click(() => location.reload());

  $(".card").click(function () {
    if (!timerStarted) {
      startTimer();
      timerStarted = true;
    }

    if ($(this).hasClass("flip") || flippedCards.length === 2) return;

    $(this).addClass("flip");
    flippedCards.push($(this));

    if (flippedCards.length === 2) {
      moves++;
      $("#moves").text("Moves: " + moves);
      checkMatch();
    }
  });
});

function createBoard() {
  deck.forEach(emoji => {
    $("#gameBoard").append(`
      <div class="card">
        <div class="front"></div>
        <div class="back">${emoji}</div>
      </div>
    `);
  });
}

function shuffle(array) {
  array.sort(() => 0.5 - Math.random());
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.find(".back").text() === card2.find(".back").text()) {
    matched += 2;
    flippedCards = [];

    if (matched === deck.length) {
      clearInterval(timer);
      $("#finalTime").text(seconds + "s");
      $("#finalMoves").text(moves);
      $("#winScreen").fadeIn();
    }
  } else {
    setTimeout(() => {
      card1.removeClass("flip");
      card2.removeClass("flip");
      flippedCards = [];
    }, 1000);
  }
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    $("#timer").text("Time: " + seconds + "s");
  }, 1000);
}
