const music = document.getElementById("music");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const title = document.getElementById("title");

let isMoving = false;

// Browser rule: music starts after user interaction
function startMusic() {
  music.play().catch(() => {});
  window.removeEventListener("click", startMusic);
}
window.addEventListener("click", startMusic);

// YES button runs away smoothly
yes.addEventListener("mouseenter", () => {
  if (isMoving) return;
  isMoving = true;

  const area = document.getElementById("buttons");
  const maxX = area.clientWidth - yes.offsetWidth;
  const maxY = area.clientHeight - yes.offsetHeight;

  const targetX = Math.random() * maxX;
  const targetY = Math.random() * maxY;

  yes.style.left = targetX + "px";
  yes.style.top = targetY + "px";

  setTimeout(() => {
    isMoving = false;
  }, 300);
});

// YES clicked
yes.addEventListener("click", () => {
  alert("LOVEEE YOU AND LET'S CHERISH THIS DAY!!! 💘🥰");
  title.textContent = "Happy Valentine’s Day ️";
  yes.disabled = true;
  no.disabled = true;
});