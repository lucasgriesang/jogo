const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    if (guess === randomNumber) {
        document.getElementById('guessResult').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        document.getElementById('guessResult').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('guessResult').textContent = 'Too high! Try again.';
    }
    attempts++;
}
