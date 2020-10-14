function bounce(movingRect, fixedRect) {
  if (
    movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
  ) {
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;
  }
  if (
    movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
  ) {
    movingRect.velocityY = movingRect.velocityY * -1;
    fixedRect.velocityY = fixedRect.velocityY * -1;
  }
}
function isTouching(object, target) {
  if (
    object.x - target.x < object.width / 2 + target.width / 2 &&
    target.x - object.x < target.width / 2 + object.width / 2 &&
    object.y - target.y < object.height / 2 + target.height / 2 &&
    target.y - object.y < target.height / 2 + object.height / 2
  ) {
    object.velocityX = 0;
    return true;
  } else {
    return false;
  }
}
