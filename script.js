let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Generate a random number
const generateTarget = () => {
 return Math.floor(Math.random() * 10); // obtiene numero random entre 0 y 9
};

// Arrow function to compare absolute values from players to the target.
const compareGuesses = (humanGuess, computerGuess, target) => {
// get absolute value, between userGuess and targetGuess  
  const humanAbsolute = Math.abs(humanGuess - target);
// get absolute value, between computerGuess and targetGuess
  const computerAbsolute = Math.abs(computerGuess - target); 

// Evaluate 
//if humanAbsolute is <= computer absolute = true, if not, false.
return humanAbsolute <= computerAbsolute;
}

//Arrow funtion to score update
const updateScore = winner => {
  if (winner === 'human'){
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}

console.log(generateTarget()); // Should Print the random number
console.log(compareGuesses(2, 4, 2)); // false
console.log(compareGuesses(7, 7, 7)); // true
console.log(compareGuesses(5, 2, 7)); // true