const snakeHead = document.getElementById("snake-head");
this.snakeLeftPosition = 0;
this.snakeTopPosition = 0;

const snakeMovingRight = () => {
  this.snakeLeftPosition += 20;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
  eatingFood();
};
const snakeMovingLeft = () => {
  this.snakeLeftPosition += -20;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
  eatingFood();
};
const snakeMovingUP = () => {
  this.snakeTopPosition += -20;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
  eatingFood();
};
const snakeMovingDown = () => {
  this.snakeTopPosition += 20;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
  eatingFood();
};
let direction = "";
const changeDirection = (event) => {
  direction = event.key;
  specifingDirection();
};

let interval = setInterval(function () {
  specifingDirection();
  eatingFood();
}, 500);

const specifingDirection = () => {
  clearInterval(interval);
  if (direction == "ArrowRight") {
    interval = setInterval(snakeMovingRight, 200);
  } else if (direction == "ArrowLeft") {
    interval = setInterval(snakeMovingLeft, 200);
  } else if (direction == "ArrowUp") {
    interval = setInterval(snakeMovingUP, 200);
  } else if (direction == "ArrowDown") {
    interval = setInterval(snakeMovingDown, 200);
  }
};

document.addEventListener("keydown", changeDirection);

const stop = () => {
  clearInterval(interval);
};

let food = document.getElementById("food");

const changeFoodPos = () => {
  food.style.left =
    (Math.floor((Math.random() * window.innerHeight) / 20) * 20).toString() +
    "px";
  food.style.top =
    (Math.floor((Math.random() * window.innerHeight) / 20) * 20).toString() +
    "px";
};

changeFoodPos();

const eatingFood = () => {
  if (
    food.style.left === snakeHead.style.left &&
    food.style.top === snakeHead.style.top
  ) {
    changeFoodPos();
  }
};
