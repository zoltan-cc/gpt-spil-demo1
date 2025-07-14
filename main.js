const gameRoot = document.getElementById("game");
let playerName = "";
let currentRound = 0;
const maxRounds = 5;

const scenarios = [
  {
    context: "Din startup har lige fået adgang til en ny datastrøm fra sociale medier. Det kan bruges til politisk profilering.",
    options: [
      { label: "✅ Du modtager statsstøtte og goodwill", outcome: "Din virksomhed bliver rost offentligt." },
      { label: "⚠️ Din nye AI går rogue", outcome: "Du mister data og tillid." },
      { label: "💰 Du vinder stor kontrakt", outcome: "Din omsætning fordobles." },
      { label: "🔥 Whistleblower lækker dine metoder", outcome: "Du står i shitstorm." },
      { label: "👮‍♂️ Du tjener hurtigt", outcome: "Du får høj profit – men gråzone." }
    ]
  },
  {
    context: "Et EU-direktiv truer med at forbyde din kerneforretning. Du har 48 timer til at reagere.",
    options: [
      { label: "📞 Du hyrer lobbyist", outcome: "Lovgivning blødes op." },
      { label: "🔐 Du flytter data offshore", outcome: "Juridisk risiko stiger." },
      { label: "🤝 Du indgår partnerskab", outcome: "Nyt netværk åbnes." },
      { label: "🕵️ Du anonymiserer alt", outcome: "Kunder forsvinder." },
      { label: "🧠 Du opgraderer AI-agent", outcome: "Effektivitet stiger kraftigt." }
    ]
  },
  {
    context: "Et stort medie har fundet lækkede interne dokumenter. Du ved de rammer i morgen.",
    options: [
      { label: "🎤 Du går i offensiv presse", outcome: "Du vender narrativet." },
      { label: "📉 Du trækker dig fra markedet", outcome: "Du mister vækst." },
      { label: "🤫 Du forhandler med journalister", outcome: "Skandalen dæmpes." },
      { label: "⚖️ Du truer med søgsmål", outcome: "Det eskalerer offentligt." },
      { label: "🪄 Du lancerer ny feature", outcome: "Historien drukner lidt." }
    ]
  },
  {
    context: "Kina tilbyder adgang til en massiv dataplatform, men kræver loyalitet.",
    options: [
      { label: "🇨🇳 Du siger ja", outcome: "Kæmpe vækst – men politisk reaktion." },
      { label: "🇺🇸 Du beder USA om støtte", outcome: "Handelsaftale muligt." },
      { label: "💼 Du starter nyt firma i Singapore", outcome: "Mere fleksibilitet – men kompleks drift." },
      { label: "🏦 Du søger EU-funding", outcome: "Krav om compliance." },
      { label: "🔒 Du afviser tilbud", outcome: "Du bevarer integritet – men taber momentum." }
    ]
  },
  {
    context: "En tidligere medarbejder forsøger at kopiere din forretningsmodel i Dubai.",
    options: [
      { label: "🔎 Du lancerer undersøgelse", outcome: "Beviser kopiering." },
      { label: "📢 Du opbygger brand", outcome: "Du styrker din egen fortælling." },
      { label: "🎯 Du fokuserer på ny teknologi", outcome: "Konkurrenten sakker bagud." },
      { label: "🛡️ Du udgiver open source", outcome: "Du fremstår generøs – men mister forspring." },
      { label: "🧑‍⚖️ Du sagsøger konkurrenten", outcome: "Langvarig sag – men mulig sejr." }
    ]
  }
];

function startGame() {
  playerName = document.getElementById("playerName").value || "Spiller";
  currentRound = 0;
  gameRoot.innerHTML = "";
  nextRound();
}

function nextRound() {
  if (currentRound >= maxRounds) {
    showEndScreen();
    return;
  }
  const round = scenarios[currentRound];
  const div = document.createElement("div");
  div.innerHTML = `<h2>Runde ${currentRound + 1} – ${playerName}</h2>
    <div class="context"><strong>Situation:</strong> ${round.context}</div>
    <p>Hvilken strategi vælger du?</p>`;
  round.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + i)}: ${opt.label}`;
    btn.className = "option";
    btn.onclick = () => {
      div.innerHTML += `<p><em>Agent BasicOps-1:</em> ${opt.outcome}</p>`;
      currentRound++;
      setTimeout(() => {
        gameRoot.innerHTML = "";
        nextRound();
      }, 2000);
    };
    div.appendChild(btn);
  });
  gameRoot.appendChild(div);
}

function showEndScreen() {
  gameRoot.innerHTML = `<h2>🎉 Tak for at spille, ${playerName}!</h2>
  <p>Demoen er slut. Besøg <a href="https://datatycoongame.com" target="_blank">Buy now</a> for fuld version.</p>`;
}
