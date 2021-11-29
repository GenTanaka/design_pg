const NUM = 200;

let x_slider;
let y_slider;

let vecLocation = [];
let vecVelocity = [];
let color = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

    x_slider = createSlider(-30, 30, 5);
    x_slider.position(20,20)

    y_slider = createSlider(-30, 30, 5);
    y_slider.position(20,40)

    for (let i = 0; i < NUM; i++) {
        vecLocation[i] = createVector(random(width), random(height));
        vecVelocity[i] = createVector(10, 10);
        color[i] = [random(255), random(255), random(255)];
    }
}

function draw() {
    background(0, 50);
    noStroke();
    for (let i = 0; i < NUM; i++) {
        vecVelocity[i] = createVector(x_slider.value(), y_slider.value())
        fill(color[i][0], color[i][1], color[i][2], 150);
        ellipse(vecLocation[i].x, vecLocation[i].y, 10, 10);
        vecLocation[i].add(vecVelocity[i]);
        if (vecLocation[i].x >= windowWidth || vecLocation[i].y >= windowHeight || vecLocation[i].x <= 0 || vecLocation[i].y <= 0) {
            let new_x = windowWidth - vecLocation[i].x;
            let new_y = windowHeight - vecLocation[i].y;
            vecLocation[i].x = new_x;
            vecLocation[i].y = new_y;
        }
    }
}
