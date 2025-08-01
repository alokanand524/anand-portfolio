const emojis = ['😀','🍕','🎈','🚗','🐶','🌟','🏀','🎵'];
let cardValues = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const doubled = [...emojis, ...emojis];
  cardValues = shuffle(doubled);
  const board = $('#game-board');
  board.empty();
  for (let i = 0; i < cardValues.length; i++) {
    board.append(`<div class="card" data-index="${i}"></div>`);
  }
  moves = 0;
  $('#move-counter').text(moves);
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function flipCard(card) {
  const index = $(card).data('index');
  if ($(card).hasClass('flipped') || $(card).hasClass('matched') || lockBoard) return;

  $(card).addClass('flipped').text(cardValues[index]);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  moves++;
  $('#move-counter').text(moves);

  const firstIndex = $(firstCard).data('index');
  const secondIndex = $(secondCard).data('index');

  if (cardValues[firstIndex] === cardValues[secondIndex]) {
    $(firstCard).addClass('matched');
    $(secondCard).addClass('matched');
    resetFlip();
    checkWin();
  } else {
    setTimeout(() => {
      $(firstCard).removeClass('flipped').text('');
      $(secondCard).removeClass('flipped').text('');
      resetFlip();
    }, 1000);
  }
}

function resetFlip() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function checkWin() {
  if ($('.card.matched').length === cardValues.length) {
    setTimeout(() => {
      alert(`🎉 You won in ${moves} moves!`);
    }, 500);
  }
}

$(document).ready(function () {
  createBoard();

  $('#game-board').on('click', '.card', function () {
    flipCard(this);
  });

  $('#restart-btn').click(function () {
    createBoard();
  });
});


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
