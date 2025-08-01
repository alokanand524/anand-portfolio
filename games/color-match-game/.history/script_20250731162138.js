const colors = ["red", "green", "blue", "yellow"];
let currentColor = "";
let score = 0;
let interval = 2000;
let gameInterval = null;
let isGameRunning = false;

const gameBox = document.getElementById("gameBox");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const buttons = document.querySelectorAll(".color-btn");

function startGame() {
  if (isGameRunning) return;

  isGameRunning = true;
  score = 0;
  interval = 2000;
  scoreDisplay.textContent = score;
  message.textContent = "Match the color!";
  nextRound();
}

function resetGame() {
  clearInterval(gameInterval);
  isGameRunning = false;
  gameBox.style.backgroundColor = "#333";
  message.textContent = "Press Start to Play!";
  score = 0;
  scoreDisplay.textContent = score;
}

function nextRound() {
  clearInterval(gameInterval);

  currentColor = colors[Math.floor(Math.random() * colors.length)];
  gameBox.style.backgroundColor = currentColor;

  gameInterval = setTimeout(() => {
    gameOver();
  }, interval);
}

function checkColor(selectedColor) {
  if (!isGameRunning) return;

  if (selectedColor === currentColor) {
    score++;
    scoreDisplay.textContent = score;
    interval = Math.max(600, interval - 100); // Speed up
    nextRound();
  } else {
    gameOver();
  }
}

function gameOver() {
  clearInterval(gameInterval);
  isGameRunning = false;
  message.textContent = `❌ Game Over! Final Score: ${score}`;
  gameBox.style.backgroundColor = "#333";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    checkColor(btn.dataset.color);
  });
});

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
