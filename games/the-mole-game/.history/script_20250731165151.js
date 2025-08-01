let score = 0;
let highScore = localStorage.getItem("shapeHighScore") || 0;
let instructionShape = '';
let currentShape = '';
let gameInterval;
let speed = 2000;

$("#high-score").text(highScore);

const shapes = ["circle", "square", "triangle"];
const instructions = {
  "circle": "Tap Circle!",
  "square": "Tap Square!",
  "triangle": "Tap Triangle!"
};

function getRandomShape() {
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function showShape() {
  $("#shape-area").empty();
  currentShape = getRandomShape();
  let div = $("<div>").addClass("shape").addClass(currentShape);
  $("#shape-area").append(div);
}

function newInstruction() {
  instructionShape = getRandomShape();
  $("#instruction").text(instructions[instructionShape]);
}

function startGame() {
  score = 0;
  speed = 2000;
  $("#score").text(score);
  newInstruction();
  showShape();

  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    newInstruction();
    showShape();
    speed = Math.max(600, speed - 50);
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      newInstruction();
      showShape();
    }, speed);
  }, speed);
}

function gameOver() {
  clearInterval(gameInterval);
  $("#instruction").text("Game Over! Tap Start to try again.");
  if (score > highScore) {
    localStorage.setItem("shapeHighScore", score);
    $("#high-score").text(score);
  }
}

$("#start-btn").click(startGame);

$("#shape-area").click(function () {
  if (currentShape === instructionShape) {
    score++;
    $("#score").text(score);
    newInstruction();
    showShape();
  } else {
    gameOver();
  }
});
