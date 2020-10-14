var wall, movingRect, car1, car2, car3;

function setup() {
  createCanvas(1200, 800);
  wall = createSprite(800, 100, 50, 400);
  wall.shapeColor = "green";
  wall.debug = true;
  //movingRect = createSprite(400, 800, 80, 30);
  //movingRect.shapeColor = "green";
  //movingRect.debug = true;
  car1 = createSprite(10, 100, 10, 10);
  car1.velocityX = 2;
  car2 = createSprite(10, 200, 10, 10);
  car2.velocityX = 3;
  car3 = createSprite(10, 300, 10, 10);
  car3.velocityX = 4;

  //movingRect.velocityY = -5;
}

function draw() {
  background(0, 0, 0);

  bounce(car3, wall);
  if (isTouching(car1, wall)) {
    car1.shapeColor = "red";
  }

  if (isTouching(car2, wall)) {
    car2.shapeColor = "purple";
  }

  //if (isTouching(car3, wall)) {
  // car3.shapeColor = "blue";
  //}

  drawSprites();
}
