// let userInput = 0;
const pad = document.querySelector(".sketchContainer");

const button = document.getElementById("startButton");

let userInput = document.getElementById("gridSize");

button.addEventListener("click", function () {
  let x = userInput.value;
  console.log(x);
  if (x > 100) {
    document.getElementById("appInfo").textContent = "Size can't exceed 100!";
  } else {
    clearGrid();
    startSketch(x);
    console.log(x);
  }
});

function clearGrid() {
  pad.innerHTML = "";
}

function startSketch(x) {
  console.log(x);
  // Sets the container with 'x' rows and 'x' columns
  pad.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  pad.style.gridTemplateRows = `repeat(${x}, 1fr)`;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      pad.appendChild(cell);
    }
  }
}
