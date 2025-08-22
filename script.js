// Envelope open/close
document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');

  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
  });

  // Heart animation
  const colors = ["#FF9999", "#C154C1", "#DE5D83"];
  const heartsContainer = document.getElementById("hearts");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 15 + 10 + "px";
    heart.style.width = size;
    heart.style.height = size;
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 400);
});
