const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Start button opens the full page
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

// Play song button
musicBtn.addEventListener("click", () => {
  bgMusic.play();
  musicBtn.innerHTML = "Playing 🎶💙";
});

// YES button click
yesBtn.addEventListener("click", () => {
  message.innerHTML = "I love you so much ❤️🌍";
});

// NO button moves away
noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * 300 - 150;
  let y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 🦋 Butterfly animation
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");

  const butterflies = ["🦋", "💙🦋", "🦋💙"];
  butterfly.innerHTML = butterflies[Math.floor(Math.random() * butterflies.length)];

  butterfly.style.left = Math.random() * 100 + "vw";
  butterfly.style.animationDuration = Math.random() * 4 + 3 + "s";

  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 7000);
}

setInterval(createButterfly, 400);
