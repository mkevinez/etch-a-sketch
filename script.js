let sketchWindow = document.querySelector('#sketch-window');
let resolutionButton = document.querySelector('#resolution-button');

let squaresPerSide = 16;
let resolution = squaresPerSide * squaresPerSide;
let percentOfWindow = (1 / squaresPerSide) * 100;

createSquares();
let squares = document.querySelectorAll('.square');

resolutionButton.addEventListener('click', (e) => {
    squares.forEach(square => {
        deleteSquares();
    })
    createSquares();
})

function createSquares() {
    squaresPerSide = window.prompt("Number of squares per side", 16);
    resolution = squaresPerSide * squaresPerSide;
    percentOfWindow = (1 / squaresPerSide) * 100;

    for (let i = 0; i < resolution; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `flex-basis: ${percentOfWindow}%; height: ${percentOfWindow}%`;
        sketchWindow.appendChild(square);
        console.log(square);
    }

    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('color-change');
        })
    })
}

function deleteSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        sketchWindow.removeChild(square);
    })
}
