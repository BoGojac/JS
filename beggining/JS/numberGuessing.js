// 1. Configuration & Global State
let originalNumber = Math.floor(Math.random() * 100) + 1; // Now it's a random number!
let trialCount = 0;
let guessedNumbers = [];
const maxTrials = 10;

// 2. Element Selectors (Global Scope so all functions can see them)
const userGuess = document.getElementById('userGuessInput');
const outPutText = document.getElementById('outPutText');
const countTrial = document.getElementById('countTrial');
const guessedNumberDisplay = document.getElementById('guessedNumber');
const resetBtn = document.getElementById('resetBtn');
const guessBtn = document.getElementById('guessBtn');

const compareGuess = () => {
    const userGuessValue = Number(userGuess.value);

    if (userGuess.value === '' || isNaN(userGuessValue)) {
        outPutText.textContent = 'Please enter a valid number!';
        return;
    }

    trialCount += 1;
    guessedNumbers.push(userGuessValue);
    guessedNumberDisplay.textContent = `Previous guesses: ${guessedNumbers.join(', ')}`;
    userGuess.value = '';
    userGuess.focus();

    if (userGuessValue === originalNumber) {
        outPutText.textContent = `Congrats! You got the number: ${userGuessValue}`;
        countTrial.textContent = `You got it in ${trialCount} attempts!`;
        endGame();
    } else if (trialCount >= maxTrials) {
        outPutText.textContent = `Game Over! The number was ${originalNumber}.`;
        endGame();
    } else {
        outPutText.textContent = userGuessValue < originalNumber ? 'Too low!' : 'Too high!';
        countTrial.textContent = `Trials left: ${maxTrials - trialCount}`;
    }
};

const endGame = () => {
    guessBtn.disabled = true;
    userGuess.disabled = true;
    resetBtn.style.display = 'block';
};

const resetGame = () => {
    // Reset Logic
    trialCount = 0;
    guessedNumbers = [];
    originalNumber = Math.floor(Math.random() * 100) + 1; // New number for new game

    // Reset UI
    guessBtn.disabled = false;
    userGuess.disabled = false;
    outPutText.textContent = 'New game! Start guessing...';
    countTrial.textContent = '';
    guessedNumberDisplay.textContent = '';
    resetBtn.style.display = 'none';
    userGuess.focus();
};

// 3. Event Listeners (Set these only once)
guessBtn.addEventListener('click', compareGuess);
resetBtn.addEventListener('click', resetGame);