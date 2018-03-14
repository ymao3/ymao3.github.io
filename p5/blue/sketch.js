//introduce global variables 
var mirrorText; 
var mirrorShadow;
var index;
var drawCount;

function setup() {
 mirrorText = "blue";
 //split the text into units
 mirrorShadow = mirrorText.split(" ")
 // build a canvas
 createCanvas(windowWidth, windowHeight);
 //use a font
 textFont("courier", 100);
 //give index initial value
 index = 0;
 //frameRate(6);
 // give a initial value to drawCount
 drawCount = 0;
}

function draw() {
  // clean the screen at beginning of each draw
  //background(255);
  // put drawing code here
  // we need a color for the text
  fill(0,0,255);
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