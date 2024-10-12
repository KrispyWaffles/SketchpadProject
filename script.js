let userInput = 0;
let gridRow = 0;
let cell = 0;

function enterBoxNum() {
if (userInput < 2 || userInput > 100) {
    document.getElementById("gridSize").textContent = "Invalid Choice";
    
    }
    userSketch();
}

function userSketch() {
    for (let i = 0; i < x; i++) {
        gridRow.createElement(div);
        gridRow.classList.add("row")
    }
    for (let i = 0; i < x; i++) {
        cell.createElement(div)
        cell.classList.add("cell")
        gridRow.appendItem(cell)
    }
    container.appendItem(row)
}