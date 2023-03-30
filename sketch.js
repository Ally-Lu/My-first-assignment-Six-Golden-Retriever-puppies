let points_g1 = [[1,10], [0,17], [6,19], [13,18], [15,19], [20,17], [20,14], [17,11], [16,11], [15,9], [15,6], [16,0], [16,-4], [16,-7], [15,-11], [16,-16], [17,-16], [19,-18], [17,-19], [13,-19], [12,-17], [12,-16], [11,-10], [11,-6], [9,-7], [8,-7], [4,-8], [3,-12], [5,-19], [4,-20], [0,-20], [-1,-19], [-1,-16], [-1,-11], [-2,-7], [-4,-6], [-8,-8], [-8,-13], [-8,-15], [-7,-16], [-7,-17], [-8,-18], [-11,-18], [-12,-16], [-12,-9], [-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]]; //list資料，
let points_g2 = [[4,8], [5,7], [6,4], [10,3], [12,5], [13,7], [15,9]];
let points_g3 = [[7,11], [5,10], [4,11], [5,12], [6,12], [7,11]];
let points_g4 = [[14,11], [12,10], [11,11], [12,12], [13,12], [14,11]];
let points_g5 = [[4,-8], [5,-13], [6,-14], [6,-15], [4,-15]];
let points_g6 = [[3,12], [6,19]];
let points_g7 = [[6,4], [7,6], [9,6], [10,3]];
let points_g8 = [[16,11], [13,18]];
let pointsArray = [points_g1, points_g2, points_g3, points_g4, points_g5, points_g6, points_g7, points_g8]; //將所有的點集放在一個陣列裡面

function setup() {
  createCanvas(windowWidth, windowHeight); // 建立一個繪圖區域
  scalePoints(pointsArray); // 改變點的大小或位置
}

function draw() {
  background(255); // 設置背景顏色
	strokeWeight(10); // 設置線條寬度
	strokeCap(ROUND); // 設置線條端點樣式為圓角
	
  // 計算縮放和移動的值
  scaleValue = mouseX / (width * 2) + 0.5;
  moveX = mouseX - width / 2;
  moveY = height / 2 - mouseY;

  // 移動和縮放畫布
  translate(width / 2 + moveX, height / 2 + moveY);
  scale(scaleValue, -scaleValue); // 加上負號讓 Y 軸反轉
	
  for (let i = 0; i < pointsArray.length; i++) {
    drawPoints(pointsArray[i], '#f6d365', '#fda085', i/pointsArray.length); // 繪製所有點
  }
	
	push();
  translate(-50, 0);
  scale(1, -1);
  fill(0);
  textSize(77);
  textAlign(CENTER, CENTER);
  text("教育科技系狗", 0, 0);
  pop();
	
}

function scalePoints(pointsArray) {
	// 迴圈中將每個點的位置乘以20，改變點的大小或位置
  for (let i = 0; i < pointsArray.length; i++) {
    for (let j = 0; j < pointsArray[i].length; j++) {
      pointsArray[i][j][0] *= 20;
      pointsArray[i][j][1] *= 20;
    }
  }
}

// 將點移動到新位置
function movePoints(points) {
  for (let i = 0; i < points.length; i++) {
    points[i].x += random(-1, 1);
    points[i].y += random(-1, 1);
  }
}

function drawPoints(points, color1, color2) {
  for (let j = 0; j < 5; j++) { // 這個迴圈會重複五次，用來畫出五組平行的線段
    for (let i = 0; i < points.length-1; i++) { // 這個迴圈會繪製每條線段
      let c = lerpColor(color(color1), color(color2), i/points.length); // 計算線段的顏色
      stroke(c); // 設置線段顏色
      line(points[i][0]+30*j, points[i][1]+30*j, points[i+1][0]+30*j, points[i+1][1]+30*j); // 繪製線段，線段的 x 和 y 座標都加上 30*j，產生平行效果
			line(points[i][0]-700, points[i][1]-500, points[i+1][0]-700, points[i+1][1]-500); // 狗狗原本的模樣
    }
  }
}