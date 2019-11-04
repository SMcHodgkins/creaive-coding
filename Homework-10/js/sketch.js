var larmx =201;
var larmy =250;

var armw =8;
var arml=150;

var rarmx=150;
var rarmy=250;

var eyew=30;
var eyel=45;
var reyey=180
var reyex=165;
var leyex=245;
var leyey=180;
var scottx=280;
var scotty=440;

var speed;
var speed1;
var speed2;
var speed3;
var speed4;
var speed5;
var txtsize;
var txt;
function setup() {
  createCanvas(350, 450);
  speed = Math.floor(Math.random()*5)+1;
    speed1 = Math.floor(Math.random()*5)+1;
    speed2 = 8;
    speed3 = 8;
    speed4 = 1;
    speed5 = 1;
    txt=26;
    txtsize=-1;
}

function draw() {
  background(137);
  strokeWeight(0);
  fill(13);
  textSize(26)
  text('Scott', scottx,scotty); //280,440
    if(scottx>=281||scottx<0||scotty>441){
    speed4*=-1
    speed5*=-1}
      scottx+=speed4;
      scotty+=speed5;
  fill(120); //triangle fill
  triangle(-50,250,380,365,100,475); //background triangle
  fill(256) //text fill
  strokeWeight(2)
  stroke('black')
  /*textSize(txtsize);
  if(txtsize<=36){
    txtsize+=.5;
  } //This was such a pain.
  if(txtsize>=36){
    txtsize/=5;
  } */ //Exhiled
  textSize(txt);
  text('Self-Portrait',10,25);
    if(txt==26 || txt == 31){
      txtsize *=-1
    }
    txt += txtsize;
  fill(250); //Fill for body parts
  ellipse(larmx,larmy,armw,arml); //left arm
    if(larmx > 225||larmx<=200)
    {
    speed*=-1;
    }
    larmx+=speed;
  rect(165,200,10,150); //right leg
  rect(180,200,10,150); //left leg
  rect(150,150,50,100); //body
  ellipse(rarmx,rarmy,armw,arml); //right arm
    if(rarmx>155||rarmx<=145){
      speed1*=-1;
    }
    rarmx+=speed1;
  circle(215,130,185); //head
  fill(13); //fill for eyes
  ellipse(leyex,leyey,eyew,eyel); //left eye
    if(leyey>180||leyey<165){
      speed2*=-1;
    }
    leyey+=speed2;
  ellipse(reyex,reyey,eyew,eyel); //right eye
    if(reyey>180||reyey<155){
      speed3*=-1;
    }
    reyey+=speed3;
  line(10,30,150,30); //line under title
  stroke('red') //red dot color
  strokeWeight(3)
  point(175,228) //bottom dot
  point(171,223) //left dot
  point(178,223) //right dot
}
