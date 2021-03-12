function computerPlay() {
  let opciones = ["rock", "paper", "scissor"]
  let computerChoice = opciones[Math.floor(Math.random() * opciones.length)]
  console.log(`ComputerChoice: ${computerChoice}`)
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  let win
  let result
  if ((playerSelection === "rock" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "scissor")
    || (playerSelection === "scissor" && computerSelection === "rock")) {
    win = 0
  }
  else if ((playerSelection === "rock" && computerSelection === "scissor")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissor" && computerSelection === "paper")) {
    win = 1
  }
  else {
    win = 2
  }
  switch (win) {
    case 0: result = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
    case 1: result = `You Win! ${playerSelection} beats ${computerSelection}`; break;
    case 2: result = "Draw"; break;
  }
  return result
}

function playerSelection(round) {
  let playerSelection
  while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor')) {
    playerSelection = window.prompt(`Round ${round}: Select your choice: rock, paper or scissor`).toLowerCase()
  }
  console.log(`PlayerChoice: ${playerSelection}`)
  return playerSelection
}

function oneGame(round) {
  let result
  let computer = computerPlay()
  let player = playerSelection(round)
  let roundResult = playRound(player, computer)
  console.log(`Round ${round}: ${roundResult}`)
  if (roundResult.includes("Win"))
    result = 1;
  else if (roundResult.includes("Lose"))
    result = 0;
  else
    result = 2;
  return result;
}

function game() {
  let playerCount = 0
  let computerCount = 0
  for (let i = 1; i <= 5; i++) {
    let result = oneGame(i);
    switch (result) {
      case 0: computerCount++; break;
      case 1: playerCount++; break;
    }
  }
  if (playerCount > computerCount)
    console.log("Player Wins Game")
  else if (playerCount < computerCount)
    console.log("Computer Wins Game")
  else
    console.log("Draw")
}

game()