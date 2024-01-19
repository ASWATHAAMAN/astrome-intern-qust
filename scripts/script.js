`use strict`;
let nInterId;

function changeHeight() {
  if (!nInterId) {
    nInterId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const box1 = document.getElementById("box1");
  box1.className =
    box1.className === "back-clr-one" ? "back-clr-five" : "back-clr-one";
  const box2 = document.getElementById("box2");

  box2.className =
    box2.className === "back-clr-two" ? "back-clr-four" : "back-clr-two";
  const box3 = document.getElementById("box3");

  box3.className =
    box3.className === "back-clr-three" ? "back-clr-one" : "back-clr-three";
  const box4 = document.getElementById("box4");

  box4.className =
    box4.className === "back-clr-four" ? "back-clr-two" : "back-clr-four";
  const box5 = document.getElementById("box5");

  box5.className =
    box5.className === "back-clr-five" ? "back-clr-one" : "back-clr-five";
}

function stopTextColor() {
  clearInterval(nInterId);
  nInterId = null;
}
function resetColor() {
 const box1= document.getElementById("box1");
 box1.className= "reset"
  const box2 = document.getElementById("box2");
  box2.className = "reset";
   const box3 = document.getElementById("box3");
   box3.className = "reset";
    const box4 = document.getElementById("box4");
    box4.className = "reset";
     const box5 = document.getElementById("box5");
     box5.className = "reset";
     clearInterval(nInterId)
     nInterId = null;
}

document.getElementById("start").addEventListener("click", changeHeight);
document.getElementById("stop").addEventListener("click", stopTextColor);
document.getElementById("reset").addEventListener("click", resetColor);
