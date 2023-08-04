let sketchWindow = document.querySelector('#sketch-window');

console.log(sketchWindow);

let squaresPerSide = 16;
let resolution = squaresPerSide * squaresPerSide;
let percentOfWindow = (1 / squaresPerSide) * 100;

for (let i = 0; i < resolution; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `flex-basis: ${percentOfWindow}%; height: ${percentOfWindow}%`;
    sketchWindow.appendChild(square);
    console.log(square);
}

let squares = document.querySelectorAll('.square');
console.log(squares);