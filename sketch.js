var card, chip;
var scanner, waiting, d, reader;
var sound;
var attempt=0;

function preload(){ 
  chip = loadImage("chip.png");
  waiting = loadAnimation("panel.png");
  d = loadAnimation("denied.png");
  sound = loadSound("card_error.mp3");
}



function setup() {
  createCanvas(1200,800);

  scanner = createSprite(400,200,70,70);
  scanner.addAnimation("waiting", waiting);
  //scanner.addAnimation("d", d);
  scanner.scale = 2;
  reader = createSprite(620,400,60,60);
  reader.shapeColor=(rgb(105,125,124))

  card = createSprite(400, 200, 50, 50);
  card.addImage(chip, "chip");


}

function draw() {
  background(0);  
  text("Click on the blue chip reader to scan", 780,40);
  card.x=mouseX;
  card.y=mouseY;
  //sound.play();
  if (mousePressedOver(reader)){
      sound.play();
      fill("red");
      textSize(60);
      text("FAILURE", 750,300);
     //scanner.changeAnimation("d", d);
     if (frameCount%3===0){
     attempt=attempt+1;
     console.warn("Try again your so bad cant you scan a card chip ur literally on attempt " + attempt);
     fill("yellow");
     textSize(20);
     text("Try again your so bad cant you scan a card chip", 10, 730);
     fill("red");
     }
  }
  textSize(20);
  text("Attempt " + attempt,10,700);
  drawSprites();
}