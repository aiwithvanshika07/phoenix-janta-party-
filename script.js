const aiTexts = [
  "AI is thinking for national growth...",
  "Analyzing youth power...",
  "Creating ethical promotion ideas...",
  "Building digital leadership strategy...",
  "Planning India-level online reach...",
  "Designing positive public engagement..."
];

let aiIndex = 0;

setInterval(() => {
  document.getElementById("aiText").innerText = aiTexts[aiIndex];
  aiIndex = (aiIndex + 1) % aiTexts.length;
}, 1800);

const quotes = [
  "Leadership begins with daily action.",
  "A leader does not wait for orders.",
  "Digital power grows through consistency.",
  "Promote ethically, create boldly, lead confidently.",
  "Phoenix rises through courage and creativity.",
  "Great campaigns are built one post at a time."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
