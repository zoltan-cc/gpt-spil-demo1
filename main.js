
const gameElement = document.getElementById('game');

let currentRound = 1;
const maxRounds = 5;
let playerName = "";

const outcomes = {
  A: "Du valgte A. Din startup modtager statsstøtte.",
  B: "Du valgte B. En AI-bot går rogue og lækker data.",
  C: "Du valgte C. Du lander en stor kontrakt med NATO.",
  D: "Du valgte D. En whistleblower skader dit image.",
  E: "Du valgte E. Du investerer i mørk datahandel."
};

function startGame() {
  playerName = document.getElementById('playerName').value || "Spiller";
  gameElement.innerHTML = "";
  nextRound();
}

function nextRound() {
  if (currentRound > maxRounds) {
    endGame();
    return;
  }

  const question = document.createElement('div');
  question.innerHTML = `<h2>Runde ${currentRound}</h2><p>Hvad vil ${playerName} gøre?</p>`;

  ['A', 'B', 'C', 'D', 'E'].forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => handleChoice(option);
    question.appendChild(button);
  });

  gameElement.innerHTML = "";
  gameElement.appendChild(question);
}

function handleChoice(option) {
  const result = document.createElement('p');
  result.textContent = outcomes[option] || "Ukendt valg.";
  gameElement.appendChild(result);
  currentRound++;
  setTimeout(nextRound, 2000);
}

function endGame() {
  gameElement.innerHTML = `
    <h2>Spillet er slut, ${playerName}!</h2>
    <p>Tak fordi du spillede demoen af Data Tycoon.</p>
    <a href="https://zoltan.cc" target="_blank">🔓 Besøg zoltan.cc for fuld adgang</a>
  `;
}
