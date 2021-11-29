let vecLocation = [];
let vecVelocity = [];
let color = [];
let size = [];

const NUM = 150;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    for (let i = 0; i < NUM; i++) {
        vecLocation[i] = createVector(0, 0);
        vecVelocity[i] = createVector(random(-5, 5), random(-5, 5))
        color[i] = [random(255), random(255), random(255)];
        size[i] = random(30,150);
    }
}

function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < NUM; i++) {
        fill(color[i][0], color[i][1], color[i][2], 150);
        ellipse(vecLocation[i].x, vecLocation[i].y, size[i], size[i]);
        vecLocation[i].add(vecVelocity[i]);

        if (vecLocation[i].x > width || vecLocation[i].x < 0) {
            vecVelocity[i].x *= -1;
            color[i] = [random(255), random(255), random(255)];
            size[i] += random(-10,10);
        }

        if (vecLocation[i].y > height || vecLocation[i].y < 0) {
            vecVelocity[i].y *= -1;
            color[i] = [random(255), random(255), random(255)]
            size[i] += random(-10,10);
        }
    }
}
