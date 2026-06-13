function scrollToTeam() {
  document.getElementById("team").scrollIntoView({
    behavior: "smooth"
  });
}

const aiLines = [
  "AI is thinking about digital growth...",
  "Building Phoenix Party visibility...",
  "Creating viral campaign ideas...",
  "Designing leadership-based branding...",
  "Turning teamwork into a movement..."
];

let index = 0;

setInterval(() => {
  document.getElementById("aiText").innerText = aiLines[index];
  index = (index + 1) % aiLines.length;
}, 1800);
