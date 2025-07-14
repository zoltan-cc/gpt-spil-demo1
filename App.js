let round = 1;
let state = { score: 0 };

function App() {
  const options = ['A', 'B', 'C'];
  const messages = {
    1: 'Du starter dit AI-firma. Hvad vil du fokusere på først?',
    2: 'Din AI er klar. Hvordan skal du skaffe data?',
    3: 'Etisk krise! Hvad gør du?'
  };

  const resultDiv = document.createElement('div');
  resultDiv.innerHTML = `<h1>Runde ${round}</h1><p>${messages[round]}</p>`;
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = `Vælg ${opt}`;
    btn.onclick = () => {
      state.score += Math.floor(Math.random() * 10);
      round++;
      if (round > 3) {
        document.body.innerHTML = `<h1>Spillet er slut</h1><p>Din score: ${state.score}</p>`;
      } else {
        document.body.innerHTML = '';
        document.body.appendChild(App());
      }
    };
    resultDiv.appendChild(btn);
  });
  return resultDiv;
}
export default App