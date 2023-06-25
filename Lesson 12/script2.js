let block = document.getElementById("block");
let defaultStyle = block.style.cssText;
let defaultText = "У мене є секрет!";

function handleMouseOver() {
  block.style.backgroundColor = "lightblue";
  block.textContent = "Хочеш знати який";
}

function handleMouseDown() {
  block.style.backgroundColor = "lightgreen";
  block.textContent = "А я тобі не скажу";
}

function handleMouseUp() {
  block.style.backgroundColor = "lightblue";
  block.textContent = "Хочеш знати який";
}

function handleMouseOut() {
  block.style.cssText = defaultStyle;
  block.textContent = defaultText;
}

block.addEventListener("mouseover", handleMouseOver);
block.addEventListener("mousedown", handleMouseDown);
block.addEventListener("mouseup", handleMouseUp);
block.addEventListener("mouseout", handleMouseOut);