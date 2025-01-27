// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;
let guess;

do {
    
  // Prompt the user for their guess and convert it to an integer
  guess = parseInt(prompt("Please guess the secret number (1-20) " + secret));
  
  if (guess === secret) {
    alert("Correct Guess!");
  } else if (guess < secret) {
    alert("Incorrect, too low.");
  } else if (guess > secret) {
    alert("Incorrect, too high.");
  }
} while (guess !== secret);
