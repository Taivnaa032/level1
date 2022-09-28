const start = (playerValue) => {
  const result = random()
  if (playerValue === "scissors" && result === "scissors" ||
      playerValue === "paper" && result === "paper" ||
      playerValue === "rock" && result === "rock") {
      alert("draw")
  }
  if (playerValue === "scissors" && result === "paper" ||
      playerValue === "paper" && result === "rock" ||
      playerValue === "rock" && result === "scissors") {
          humans();
      alert("player won")

  }
  if (playerValue === "scissors" && result === "rock" ||
      playerValue === "paper" && result === "scissors" ||
      playerValue === "rock" && result === "paper") {
      alert("robot won")
  }
}
function random() {
  let robotValue = Math.floor(Math.random() * 3) + 1;
  if (robotValue === 1) {
      return "scissors"
  }
  if (robotValue === 2) {
      return "paper"
  }
  if (robotValue === 3) {
      return "rock" 
  }
}