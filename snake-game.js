const snakeHead = document.getElementById("snake-head");
this.snakeLeftPosition = 0;
this.snakeTopPosition = 0;

const snakeMovingRight = () => {
  this.snakeLeftPosition += 1;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
};
const snakeMovingLeft = () => {
  this.snakeLeftPosition += -1;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
};
const snakeMovingUP = () => {
  this.snakeTopPosition += -1;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
};
const snakeMovingDown = () => {
  this.snakeTopPosition += 1;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
};
let direction = "";
const changeDirection = (event) => {
  direction = event.key;
  specifingDirection();
};

let interval = setInterval(snakeMovingRight, 10);

const specifingDirection = () => {
  clearInterval(interval);
  if (direction == "ArrowRight") {
    interval = setInterval(snakeMovingRight, 10);
  } else if (direction == "ArrowLeft") {
    interval = setInterval(snakeMovingLeft, 10);
  } else if (direction == "ArrowUp") {
    interval = setInterval(snakeMovingUP, 10);
  } else if (direction == "ArrowDown") {
    interval = setInterval(snakeMovingDown, 10);
  }
};

document.addEventListener("keydown", changeDirection);
