let block = document.getElementById("block");

let colors = ["purple", "red", "yellow", "green"];

let colorIndex = 0;

function changeColor() {
  block.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
block.addEventListener("mouseover", changeColor);
block.addEventListener("mouseout", changeColor);
