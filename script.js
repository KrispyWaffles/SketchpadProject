// let userInput = 0;
const pad = document.querySelector(".sketchContainer");



for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    pad.appendChild(div);
}

// function enterBoxNum() {
// if (userInput < 2 || userInput > 100) {
//     document.getElementById("gridSize").textContent = "Invalid Choice";
    
//     }
//     userSketch();
// }

