var trex, trex_running;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;
}

function draw() {
  background("yellow");

  drawSprites();
}