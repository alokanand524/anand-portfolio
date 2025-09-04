const colors = ['red', 'green', 'blue', 'yellow'];
let currentColor = '';
let score = 0;
let highScore = localStorage.getItem('colorMatchHighScore') || 0;
let interval;
let speed = 2000;

const gameBox = document.getElementById('game-box');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const timerBar = document.getElementById('timer-bar');

highScoreDisplay.textContent = `High Score: ${highScore}`;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function startTimerBar() {
  timerBar.style.animation = `shrinkBar ${speed}ms linear forwards`;
}

function resetTimerBar() {
  timerBar.style.animation = 'none';
  void timerBar.offsetWidth; // force reflow
  startTimerBar();
}

function updateColor() {
  currentColor = getRandomColor();
  gameBox.style.backgroundColor = currentColor;
  resetTimerBar();
}

function startGame() {
  score = 0;
  speed = 2000;
  scoreDisplay.textContent = `Score: 0`;
  updateColor();

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    gameOver();
  }, speed);
}

function gameOver() {
  clearInterval(interval);
  // Show game over message without alert
  const gameOverMsg = document.createElement('div');
  gameOverMsg.className = 'game-over-message';
  gameOverMsg.innerHTML = `<h3>⛔ Game Over!</h3><p>Final Score: ${score}</p>`;
  gameOverMsg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:20px;border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,0.3);z-index:1000;text-align:center';
  
  document.body.appendChild(gameOverMsg);
  
  setTimeout(() => {
    document.body.removeChild(gameOverMsg);
  }, 3000);
  
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('colorMatchHighScore', highScore.toString());
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  }
}

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedColor = btn.getAttribute('data-color');
    if (selectedColor === currentColor) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      if (interval) clearInterval(interval);
      speed = Math.max(700, speed - 50); // Speed up
      updateColor();
      interval = setInterval(() => {
        gameOver();
      }, speed);
    } else {
      gameOver();
    }
  });
});

startBtn.addEventListener('click', startGame);
