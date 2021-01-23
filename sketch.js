var fixedRect, movingRect, Rect1, Rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1= createSprite(200,100,40,20);
  Rect1.shapeColor= "yellow";
  Rect2= createSprite(200,300,60,20);
  Rect2.shapeColor= "blue";

  Rect1.velocityY = -4;
  Rect2.velocityY =  4;


}

function draw() {
  background(0,0,0);  
  movingRect.velocityY= -4;
  fixedRect.velocityY =  4;
  bounce(Rect1,Rect2);
  drawSprites();
} 

