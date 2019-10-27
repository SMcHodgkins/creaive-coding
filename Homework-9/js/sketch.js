function setup() {
  createCanvas(350, 450);
}

function draw() {
  background(137);
  strokeWeight(0);
  fill(120);
  triangle(-50,250,380,365,100,475);
  fill(256)
  strokeWeight(2)
  stroke('black')
  textSize(26);
  text('Self-Portrait',10,25);
  fill(250);
  ellipse(200,250,8,150);
  rect(165,200,10,150);
  rect(180,200,10,150);
  rect(150,150,50,100);
  ellipse(150,250,9,150);
  circle(215,130,185);
  fill(13);
  ellipse(245,180,30,45);
  ellipse(165,180,30,45);
  line(10,30,150,30);
  text('Scott', 280,440);
  stroke('red')
  strokeWeight(3)
  point(175,228)
  point(171,223)
  point(178,223)
}
