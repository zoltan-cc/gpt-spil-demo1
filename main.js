
const gameElement = document.getElementById('game');
let currentRound = 1;
const maxRounds = 5;
let playerName = "";
const agentName = "BasicOps-1";

const outcomes = {
  A: {
    result: "✅ Du modtager statsstøtte og goodwill – men under tæt overvågning.",
    agent: "Strategisk valg. Statspenge giver dig luft, men husk overvågningen."
  },
  B: {
    result: "⚠️ Din nye AI går rogue – og lækker interne data.",
    agent: "Av... næste gang bør vi teste mere før vi går i produktion."
  },
  C: {
    result: "💰 Du vinder stor kontrakt – men bliver sat under internationalt pres.",
    agent: "Godt træk! Men vær klar til nye krav og øjne på dig."
  },
  D: {
    result: "🔥 Whistleblower lækker dine metoder – PR-krise og undersøgelse følger.",
    agent: "Vi burde have lyttet. Nu ruller pressen og myndighederne."
  },
  E: {
    result: "🕵️ Du tjener hurtigt – men bliver blacklistet af NGO’er og medier.",
    agent: "Sort profit er farlig, men du tog chancen."
  }
};

function startGame() {
  playerName = document.getElementById('playerName').value || "Spiller";
  gameElement.innerHTML = `<p>🧠 AI-agent tilkoblet: <strong>${agentName}</strong></p>`;
  nextRound();
}

function nextRound() {
  if (currentRound > maxRounds) {
    endGame();
    return;
  }

  const question = document.createElement('div');
  question.innerHTML = `<h2>Runde ${currentRound} – ${playerName}</h2><p>Hvilken strategi vælger du?</p>`;

  ['A', 'B', 'C', 'D', 'E'].forEach(option => {
    const button = document.createElement('button');
    button.textContent = `${option}: ${outcomes[option].result.split('–')[0]}`;
    button.onclick = () => handleChoice(option);
    question.appendChild(button);
    question.appendChild(document.createElement('br'));
  });

  gameElement.innerHTML = "";
  gameElement.appendChild(question);
}

function handleChoice(option) {
  const result = document.createElement('div');
  result.innerHTML = `
    <p>${outcomes[option].result}</p>
    <p>💬 ${agentName}: "${outcomes[option].agent}"</p>
  `;
  gameElement.appendChild(result);
  currentRound++;
  setTimeout(nextRound, 3000);
}

function endGame() {
  gameElement.innerHTML = `
    <h2>Spillet er slut, ${playerName}!</h2>
    <p>Tak fordi du spillede demoen af Data Tycoon.</p>
    <p>🧠 Din AI-agent: <strong>${agentName}</strong></p>
    <a href="https://zoltan.cc" target="_blank">🔓 Besøg zoltan.cc for fuld adgang</a>
  `;
}
