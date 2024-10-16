// let userInput = 0;
const pad = document.querySelector(".sketchContainer");

const button = document.getElementById("startButton");

let userInput = document.getElementById("gridSize");




button.addEventListener("click", function () {
  let x = userInput.value;
  console.log(x)
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
  for (let i = 0; i < x; i++) {
      let row = document.createElement("div");
      row.classList.add("row");

      for (let i = 0; i < x; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
      }
      pad.appendChild(row);
    }
  }


