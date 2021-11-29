let size = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0, 20)
    appearCircle(random(width), random(height), size, random(255), random(255), random(255))
}
