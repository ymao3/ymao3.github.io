//introduce global variables 
var mirrorText; 
var mirrorShadow;
var index;
var drawCount;
var video;
var textsize;
var canvas;
var capture;
var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
  console.log("2:19");
 mirrorText = "who are you,excuse me,how are you,good,thanks,fuck";
 //split the text into units
 mirrorShadow = mirrorText.split(",")
 // build a canvas
 canvas = createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO);
 capture.size(windowWidth,windowHeight);
 //use a font
 textsize = random(5,100);
 textFont("courier", textsize);
 //give index initial value
 index = 0;
 frameRate(6);
 // give a initial value to drawCount
 drawCount = 0;
 canvas.style("position", "absolute");
 canvas.style("z-index", 1000);
 capture.style("position", "absolute");
 capture.style("z-index", -1);
}

function draw() {
  // clean the screen at beginning of each draw
  //background(255);
  // put drawing code here
  // we need a color for the text
  //background(255,255,255);
  if(drawCount == 0) {
  image(capture, 0, 0);
    drawCount++
}
  col.r = random(255);
  col.g = random(255);
  col.b = random(255);
  fill(col.r, col.g, col.b);
  // center the text
  translate(windowWidth/2,windowHeight/2);
  textAlign(CENTER);
  text(mirrorShadow[index], random(-1000,1000), random(-1000,1000))
  drawCount = drawCount + 1;

  //moudulus (if drawCount divided by some number has a 0 reminder)
  if (drawCount % 6 == 0){
       index = index + 1;
 

  if (index >= mirrorShadow.length) {
  	index = 0;
   }
 }
   
}