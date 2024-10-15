// let userInput = 0;
const pad = document.querySelector(".sketchContainer");

const button = document.getElementById('startButton');

let userInput = document.getElementById("gridSize")

let x = userInput.value;

button.addEventListener('click', function() {
    console.log(userInput)
 startSketch();
});


function startSketch() {
if (x > 100) {
    document.getElementById("appInfo").textContent = "Size can't exceed 100!";
} else {

    for (let i = 0; i < x; i++) {
        let row = document.createElement('div')
        row.classList.add("row")
    
    
    for (let i = 0; i < x; i++) {
        let cell = document.createElement('div')
        cell.classList.add("cell")
        row.appendChild(cell)
    }
    pad.appendChild(row)


}
}

}
// function enterBoxNum() {
// if (userInput < 2 || userInput > 100) {
//     document.getElementById("gridSize").textContent = "Invalid Choice";
    
//     }
//     userSketch();
// }

