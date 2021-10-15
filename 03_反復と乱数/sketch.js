const bread_start_x = 27;
const bread_start_y = 87;
const bread_end_x = 75;
const bread_end_y = 97;

const l1_s_x = bread_start_x;
const l1_s_y = bread_start_y;
const l1_e_x = bread_end_x;
const l1_e_y = bread_end_y;

const l2_s_x = l1_s_x - 5;
const l2_s_y = l1_s_y + 20;
const l2_e_x = l1_e_x;
const l2_e_y = l1_e_y + 10;

const l3_s_x = l2_s_x + 5;
const l3_s_y = l2_s_y + 20;
const l3_e_x = l2_e_x;
const l3_e_y = l2_e_y + 10;

function setup() {
    createCanvas(400, 400);
    background(255);

    for (let i = 0; i <= 200; i += 200) {
        for (let v = 0; v <= 200; v += 200) {
            let faceRed = random(255)
            let faceGreen = random(255)
            let faceBlue = random(255)

            let noseRed = random(255)
            let noseGreen = random(255)
            let noseBlue = random(255)

            strokeWeight(1);

            // 顔（青）
            fill(faceRed, faceGreen, faceBlue);
            stroke(0);
            ellipse(100 + i, 100 + v, 200, 195);

            // 顔（白）
            fill(255);
            stroke(0);
            ellipse(100 + i, 120 + v, 175, 150);

            // 口
            fill(255);
            stroke(150);
            ellipse(100 + i, 120 + v, 145, 90);
            fill(255);
            stroke(255);
            ellipse(100 + i, 115 + v, 150, 90);

            // 目
            stroke(0);
            ellipse(77 + i, 50 + v, 45, 55);
            ellipse(122 + i, 50 + v, 45, 55);
            fill(0);
            ellipse(90 + i, 50 + v, 15, 20);
            ellipse(110 + i, 50 + v, 15, 20);
            fill(255);
            ellipse(92 + i, 50 + v, 5, 5);
            ellipse(107 + i, 50 + v, 5, 5);

            // 鼻
            fill(noseRed, noseGreen, noseBlue);
            stroke(0);
            ellipse(100 + i, 77 + v, 20, 20);
            stroke(150);
            line(100 + i, 87 + v, 100 + i, 165 + v);

            // ひげ
            strokeWeight(3);
            stroke(0);
            line(l1_s_x + i, l1_s_y + v, l1_e_x + i, l1_e_y + v);
            line(l2_s_x + i, l2_s_y + v, l2_e_x + i, l2_e_y + v);
            line(l3_s_x + i, l3_s_y + v, l3_e_x + i, l3_e_y + v);
            line(200 - l1_s_x + i, l1_s_y + v, 200 - l1_e_x + i, l1_e_y + v);
            line(200 - l2_s_x + i, l2_s_y + v, 200 - l2_e_x + i, l2_e_y + v);
            line(200 - l3_s_x + i, l3_s_y + v, 200 - l3_e_x + i, l3_e_y + v);
        }
    }
}

