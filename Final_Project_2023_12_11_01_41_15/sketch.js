let canvas;
let lineSizeSlider;
let saveButton, resetButton, squareModeButton;
let isSquareMode = false;
let squareX, squareY, squareSize = 50;
let colorPicker;

function setup() {
    canvas = createCanvas(700, 500);
    canvas.parent('sketch-holder');
    background(255);

    colorPicker = select('#color-picker'); 

    lineSizeSlider = select('#line-size-slider');

    // Initialize Buttons
    saveButton = select('#save-button');
    saveButton.mousePressed(saveImage);

    resetButton = select('#reset-button');
    resetButton.mousePressed(clearCanvas);

    squareModeButton = select('#square-mode-toggle');
    squareModeButton.mousePressed(toggleSquareMode);

    // Initialize Square Position
    squareX = width / 2;
    squareY = height / 2;
}

function draw() {
    let currentColor = colorPicker.value(); // Get the current color

    if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        if (isSquareMode) {
            squareX = mouseX - squareSize / 2;
            squareY = mouseY - squareSize / 2;
            fill(currentColor);
            noStroke();
            rect(squareX, squareY, squareSize, squareSize);
        } else {
            stroke(currentColor);
            strokeWeight(lineSizeSlider.value());
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}

function saveImage() {
    saveCanvas(canvas, 'myDrawing', 'png');
}

function clearCanvas() {
    background(255); // Resets the canvas to white
}

function toggleSquareMode() {
    isSquareMode = !isSquareMode;
    squareModeButton.html(isSquareMode ? 'Drawing Mode' : 'Square Mode');
}
