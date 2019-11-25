var x= 50;
var y= 50;
/*var x1= 600;
//var y1= 200;
//var d=60;
//var s=4;
//var s1=6;
//var x2=165;
//var y2=600;
//var d2=150;
//var s2=1;
var s3=2;*/
var playerSpeed=5;
var ts=12;
var mousex = 0;
var mousey = 0;
var xCoord = [];
var yCoord = [];
var diam = [];
var xSpeed = [];
var ySpeed = [];
function setup()
   {
       createCanvas(800,800);
       var x =random (100, 500);
       var y =random (200, 500);
       var diameter = 50;
       var xs = 7;
       var ys = 4;
       for(var i = 0; i < 7; i++){
         xCoord[i] = x;
         yCoord[i] = y;
         diam[i] = diameter;
         xSpeed[i] = xs;
         ySpeed[i] = ys;
         diameter += random(25);
         xs += random(-4,2);
         ys += random(-2, -1)
       }
       /*xCoord[0] = 600;
       xCoord[1] = 165;
       yCoord[0] = 200;
       yCoord[1] = 600;
       diam[0] = 60;
       diam[1] = 150
       xSpeed[0] = 4;
       xSpeed[1] = 1;
       ySpeed[0] = 6;
       ySpeed[1] = 2;*/

   }
   function draw(){
    background(137)
   exit()
   player()
   movement()
   victory()
   movecircle()
   addCircle()
}
function movement(){
  if (keyIsDown(LEFT_ARROW)){
    x-=playerSpeed
  }
  else if (keyIsDown(RIGHT_ARROW)){
    x+=playerSpeed
  }
  else if (keyIsDown(UP_ARROW)){
    y-=playerSpeed
  }
  else if (keyIsDown(DOWN_ARROW)){
    y+=playerSpeed
  }
  if (x==800){
    x=0
  }
  else if(x==0){
    x=800
  }
}
function player(){
  fill(50,100,56);
  square(x,y,40);
}
function exit(){
  fill(0);
  textSize(ts)
  text('Exit',725,725);
  rect(765,725,10,100);
  rect(695,725,10,100);
}
function victory(){
  if(y>=height && x>=695){
    for(var i = 0; i < diam.length; i++){
      diam[i]=0;
    }
    textSize(40);
    text('You win!',350,400);
  }
}
function movecircle(){
  var c1=256;
  var c2=60;
  var c3=80;
  for(var i = 0; i < xCoord.length; i++){
    fill(c1,c2,c3);
    circle(xCoord[i],yCoord[i],diam[i]);
    c2 += random(-60,35)
    c3 += random(-80,35)
}
  //fill(200,130,65);
  //circle(xCoord[1],yCoord[1],diam[1]);
  for(var i=0; i < xCoord.length; i++) {
    if (xCoord[i]>=width-diam[i]/2 || xCoord[i]<= 0+ diam[i]/2 ){
      xSpeed[i]*=-1;
    }
      else if (yCoord[i]>=height-diam[i]/2 || yCoord[i] <= diam[i]/2){
    ySpeed[i]*=-1;
    }
    xCoord[i]+=xSpeed[i];
    yCoord[i]+=ySpeed[i];
  }
  /*if (xCoord[0]>=width-diam[0]/2 || xCoord[0]<= 0+ diam[0]/2){
    xSpeed[0]*=-1;
  }
    else if (yCoord[0]>=height-diam[0]/2 || yCoord[0] <= diam[0]/2){
  ySpeed[0]*=-1;
  }
  xCoord[0]+=xSpeed[0];
  yCoord[0]+=ySpeed[0];{
    if (xCoord[1]>=width-diam[1]/2 || xCoord[1]<= 0+diam[1]/2){
      xSpeed[1]*=-1;
    }
      else if (yCoord[1]>=height-diam[1]/2 || yCoord[1] <= diam[1]/2){
    ySpeed[1]*=-1;
    }
    xCoord[1]+=xSpeed[1];
    yCoord[1]+=ySpeed[1];
  } */
}

function addCircle(){
    ellipse(mouseX, mouseY, 5, 5);}
function mouseMoved(){
      mousex = mouseX;
      mousey = mouseY;

    }
