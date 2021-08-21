var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1300,700);
  createSprite(400, 200, 50, 50);

  var snow = new Snow(random(10,1200),10,50,50);
  var snow2 = new Snow2(random(10,1200),10,50,50);
}

function draw() {
  background(backgroundImg); 
  
  snow.display();
  snow2.display();

  drawSprites();
}