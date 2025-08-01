$(document).ready(function () {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  function playSound(result) {
    const soundMap = {
      win: '#win-sound',
      lose: '#lose-sound',
      draw: '#draw-sound'
    };
    $(soundMap[result])[0].play();
  }

  function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
  }

  function determineWinner(player, computer) {
    if (player === computer) return "draw";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) return "win";
    return "lose";
  }

  $(".choice").click(function () {
    const playerChoice = $(this).data("choice");
    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);
    playSound(result);

    if (result === "win") {
      playerScore++;
      $("#result").text(`✅ You win! ${playerChoice} beats ${computerChoice}`);
    } else if (result === "lose") {
      computerScore++;
      $("#result").text(`❌ You lose! ${computerChoice} beats ${playerChoice}`);
    } else {
      $("#result").text(`🤝 It's a draw! You both chose ${playerChoice}`);
    }

    $("#player-score").text(playerScore);
    $("#computer-score").text(computerScore);
  });

  $("#dark-toggle").change(function () {
    $("body").toggleClass("dark-mode");
  });
});
