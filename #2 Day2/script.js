import fs from 'fs'
import path from 'path'

let numbers = fs.readFileSync(path.resolve('./', 'inputFinal.txt'), 'utf8')

let score = {
  paper: 2,
  rock: 1,
  scissors: 3,
}

let move = {
  B: score.paper,
  Y: score.paper,
  A: score.rock,
  X: score.rock,
  C: score.scissors,
  Z: score.scissors,
}

let cheatingMove = {
  A: {
    // rock
    X: score.scissors, // Loosing
    Y: score.rock, // Draw
    Z: score.paper, // Winning
  },
  B: {
    // paper
    X: score.rock, // Loosing
    Y: score.paper, // Draw
    Z: score.scissors, // Winning
  },
  C: {
    // scissors
    X: score.paper, // Loosing
    Y: score.scissors, // Draw
    Z: score.rock, // Winning
  },
}

let victory = 6
let draw = 3
let loss = 0

const results = (myMove, oppenentMove) => {
  if (myMove === oppenentMove) {
    return draw + myMove
  }
  // WINNING CASES
  if (
    (myMove === score.paper && oppenentMove === score.rock) ||
    (myMove === score.rock && oppenentMove === score.scissors) ||
    (myMove === score.scissors && oppenentMove === score.paper)
  ) {
    return victory + myMove
  }
  //LOSING CASES
  return loss + myMove
}

const getTotalScorePart1 = () => {
  let rounds = numbers.split('\n').map((round) => {
    return round.split(' ')
  })
  const finalScores = rounds.map((round) => {
    let myMove = move[round[1]]
    let oppenentMove = move[round[0]]
    return results(myMove, oppenentMove)
  })

  return finalScores.reduce((a, b) => a + b, 0)
}
const getTotalScorePart2 = () => {
  let rounds = numbers.split('\n').map((round) => {
    return round.split(' ')
  })
  const finalScores = rounds.map((round) => {
    let myMove = cheatingMove[round[0]][round[1]]
    let oppenentMove = move[round[0]]
    return results(myMove, oppenentMove)
  })

  return finalScores.reduce((a, b) => a + b, 0)
}

console.log(getTotalScorePart1())
console.log(getTotalScorePart2())
