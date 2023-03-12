let canvas;
let mousePositions = [];
const MAX_POS = 50;
let ellipseSize = 30;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

}

function draw() {
  background(255);

   let originalColor = color(20, 133, 172, 100);
  // fill(originalColor);
  // ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  
  //removes poses that are older than 50
  if (mousePositions.length > MAX_POS) {
    mousePositions.shift();
  }
  
  let size = 0;
  for (let i = 0; i < mousePositions.length; i ++) {
    // how you want to draw the previous poses
    // relate it to i to change pose drawing over time
    fill(mousePositions[i].randomColor);
    if (mousePositions[i].x == mouseX && mousePositions[i].y == mouseY ){
      fill(originalColor);
    }
    ellipse(mousePositions[i].x, mousePositions[i].y, size, size);
    size = size + (ellipseSize / mousePositions.length);
  }

  // Saving mousepositions and color
  let ellipseColor = color(random(255), random(255), random(255), 100);
  mousePositions.push({x: mouseX, y: mouseY, randomColor: ellipseColor});
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}