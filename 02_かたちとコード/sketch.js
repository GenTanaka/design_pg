const bread_start_x = 55;
const bread_start_y = 175;
const bread_end_x = 150;
const bread_end_y = 195;

const l1_s_x = bread_start_x;
const l1_s_y = bread_start_y;
const l1_e_x = bread_end_x;
const l1_e_y = bread_end_y;

const l2_s_x = l1_s_x - 10;
const l2_s_y = l1_s_y + 40;
const l2_e_x = l1_e_x;
const l2_e_y = l1_e_y + 20;

const l3_s_x = l2_s_x + 10;
const l3_s_y = l2_s_y + 40;
const l3_e_x = l2_e_x;
const l3_e_y = l2_e_y + 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  strokeWeight(1);

  // 顔（青）
  fill(43, 121, 255);
  stroke(0);
  ellipse(200, 200, 400, 390);

  // 顔（白）
  fill(255);
  stroke(0);
  ellipse(200, 240, 350, 300);

  // 口
  fill(255);
  stroke(150);
  ellipse(200, 240, 290, 180);
  fill(255);
  stroke(255);
  ellipse(200, 230, 300, 180);

    // 目
  stroke(0);
  ellipse(155, 100, 90, 110);
  ellipse(245, 100, 90, 110);
  fill(0);
  ellipse(180, 100, 30, 40);
  ellipse(220, 100, 30, 40);
  fill(255);
  ellipse(185, 100, 10, 10);
  ellipse(215, 100, 10, 10);

  // 鼻
  fill(255,0,0);
  stroke(0);
  ellipse(200, 155, 40, 40);
  stroke(150);
  line(200, 175, 200, 330);

  // ひげ
  strokeWeight(3);
  stroke(0);
  line(l1_s_x, l1_s_y, l1_e_x, l1_e_y);
  line(l2_s_x, l2_s_y, l2_e_x, l2_e_y);
  line(l3_s_x, l3_s_y, l3_e_x, l3_e_y);
  line(400 - l1_s_x, l1_s_y, 400 - l1_e_x, l1_e_y);
  line(400 - l2_s_x, l2_s_y, 400 - l2_e_x, l2_e_y);
  line(400 - l3_s_x, l3_s_y, 400 - l3_e_x, l3_e_y);
}