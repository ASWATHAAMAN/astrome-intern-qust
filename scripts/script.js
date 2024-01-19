`use strict`;
let nInterId;

function changeHeight() {
  if (!nInterId) {
    nInterId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const box = document.getElementById("my_box");
  box.className = box.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nInterId);
  nInterId = null;
}

document.getElementById("start").addEventListener("click", changeHeight);
document.getElementById("stop").addEventListener("click", stopTextColor);
