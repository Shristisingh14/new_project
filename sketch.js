var square
function setup() {
  createCanvas(400,400);
  fill("blue");
  square = createSprite(200,200,20,20);
  square.shapeColor = "blue";
}

function draw() 
{
  background(30);
  console.log(" X = " + square.position.x);
  console.log("Y + " + square.position.y);
  if(keyIsDown(LEFT_ARROW)){
    square.x = square.x - 10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    square.x = square.x + 10;
  }
  if(keyIsDown(UP_ARROW)){
    square.y = square.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    square.y = square.y + 10;
  }
  drawSprites();
}





