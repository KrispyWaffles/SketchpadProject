// let userInput = 0;
let pad = document.querySelector(".sketchContainer");

let blkBtn = document.querySelector(".blkBtn");
let isDrawingBlack = false;

let colorBtn = document.querySelector(".colorBtn");
let isDrawingColor = false;


// actives black 

console.log(blkBtn);
blkBtn.addEventListener("click", () => {
  isDrawingBlack = true;
  console.log("black is active");
  });


function sketchBlk(e) {
    if (isDrawingBlack) {
      e.target.style.backgroundColor = "black";
    }
}

pad.addEventListener("mouseover", function (e) {
  console.log("Grid cell clicked");
  console.log("isDrawingBlack:", isDrawingBlack);
  if (e.target && e.target.matches(".cell")) {
    sketchBlk(e);
  }
});


// activate color

colorBtn.addEventListener("click", () => {
  isDrawingColor = true;
  console.log("color is active");
});

function sketchColor(e) {
  if (isDrawingColor) {
    e.target.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    let newColors = e.target.style.backgroundColor
    let diffColor = "#" + newColors;
    document.body.style.backgroundColor = diffColor;
  }
}

pad.addEventListener("mouseover", function (e) {
  console.log("Grid is selected!!");
  console.log("isDrawingColor:", isDrawingColor);
  if (e.target && e.target.matches(".cell")) {
    sketchColor(e);
  }
});
 

document.addEventListener("DOMContentLoaded", () => {


const button = document.getElementById("startButton");

let userInput = document.getElementById("gridSize");

// let clearBtn = document.querySelector(".clearGrid");

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

let clearBtn = document.querySelector(".clearGrid");

function clearGrid() {
  while (pad.firstChild) {
    pad.removeChild(pad.firstChild);
  }
}

clearBtn.addEventListener("click", () => {
  clearGrid();
});
});


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



