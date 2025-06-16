
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'GUN'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerChoice) {
    const computerChoice = getComputerChoice(); // Should be a fresh choice every time
    const result = getWinner(playerChoice, computerChoice);
    const resultData = { playerChoice, computerChoice, result }; // Create an object
    updateUI(resultData);
}
 playRound();
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors' && computerChoice !== 'GUN') ||
        (playerChoice === 'paper' && computerChoice === 'rock' && computerChoice !== 'GUN') ||
        (playerChoice === 'scissors' && computerChoice === 'paper' && computerChoice !== 'GUN')
    ) {
            return "You win!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'GUN') ||
        (playerChoice === 'paper' && computerChoice === 'GUN') ||
        (playerChoice === 'scissors' && computerChoice === 'GUN')
    ) {
            return "Fuck you, You lose!";
    } else {
            return "Computer wins!";
        }
}
function updateUI({ playerChoice, computerChoice, result }) {
    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.getElementById('result').textContent = result;
}