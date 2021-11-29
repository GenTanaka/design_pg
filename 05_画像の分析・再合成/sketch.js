let img;
function preload() {
	img = loadImage('./photo.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img.resize(width, height);
	background(0);
}

function draw() {
	for(let i = 0; i < 10; i++) {
		let x = int(random(width));
		let y = int(random(height));
		let a = int(random(width));
		let col = img.get(x, y);
		noStroke();
		fill(col);
		circle(x, y, 20);
	}
}