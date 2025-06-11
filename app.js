let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(`Target number is: ${targetNum}`);

let guess = prompt("Enter your first guess! (or enter 'q' to quit)");

let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Too high! Try again! (or enter 'q' to quit)");
    attempts += 1;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Try again! (or enter 'q' to quit)");
    attempts += 1;
  } else {
    guess = prompt("Enter a valid number! (or enter 'q' to quit)");
  }
}

if (guess === "q") {
  console.log("Ok, quitting the game!");
} else {
  if (attempts === 1) {
    alert(`You got it! It took you ${attempts} attempt!`);
    console.log(`You got it! It took you ${attempts} attempt!`);
  } else {
    alert(`You got it! It took you ${attempts} attempts!`);
    console.log(`You got it! It took you ${attempts} attempts!`);
  }
}
