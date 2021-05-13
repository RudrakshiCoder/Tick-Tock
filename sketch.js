var hr,sc,mn;
var bg;
var hrAngle, scAngle, mnAngle;

function preload(){
  bg = loadImage("bg.jpg");
 }


function setup() {
  createCanvas(700,700);
  
  
}


function draw() {
  background(bg);  
  
  hr = hour();
  sc = second();
  mn = minute();

  textSize(50);
  strokeWeight(4);

  stroke("green");
    fill(0,255,0);  
  text(hr + ":",220,600);

  stroke("red");
  fill("pink");
  text(mn + ":",300,600);

  stroke("blue");
  fill("cyan");
  text(sc ,380,600);

  translate(300,330);
  rotate(-90);


  

  scAngle = map(sc,0,60,0,360);

  mnAngle = map(mn,0,60,0,360);

  hrAngle = map(hr % 12,0,12,0,360);

    push();
    rotate(scAngle);
    stroke("blue");
    strokeWeight(8);
    line(0,0,130,0);
    pop();

    push();
    rotate(mnAngle);
    stroke("red");
    strokeWeight(9);
    line(0,0,90,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,255,0);
    strokeWeight(10);
    line(0,0,50,0);
    pop()

    strokeWeight(8);
    noFill();

    stroke("blue");
    arc(0,0,390,390,0,scAngle);

    strokeWeight(8);
    stroke("red");
    arc(0,0,360,360,0,mnAngle);
   
    strokeWeight(8);
    stroke(0,255,0);
    arc(0,0,330,330,0,hrAngle);

 
   

  

  drawSprites();
}