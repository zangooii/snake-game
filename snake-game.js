const snakeHead = document.getElementById("snake-head");
this.snakeLeftPosition = 100;
this.snakeTopPosition = 100;
let lastTurn = "";

let snakeMovingRight = () => {
  this.snakeLeftPosition += 20;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
  eatingFood();
  addPositon();
  tailPosition();
  lastTurn = "horizental";
  if (Math.floor(window.innerWidth / 20) * 20 <= snakeHead.offsetLeft) {
    youLost();
  }
  checkTail();
};
let snakeMovingLeft = () => {
  this.snakeLeftPosition += -20;
  snakeHead.style.left = this.snakeLeftPosition.toString() + "px";
  eatingFood();
  addPositon();
  tailPosition();
  lastTurn = "horizental";
  if (snakeHead.offsetLeft == 0) {
    youLost();
  }
  checkTail();
};
let snakeMovingUP = () => {
  this.snakeTopPosition += -20;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
  eatingFood();
  addPositon();
  tailPosition();
  lastTurn = "vertical";
  if (snakeHead.offsetTop == 0) {
    youLost();
  }
  checkTail();
};
let snakeMovingDown = () => {
  this.snakeTopPosition += 20;
  snakeHead.style.top = this.snakeTopPosition.toString() + "px";
  eatingFood();
  addPositon();
  tailPosition();
  lastTurn = "vertical";
  if (Math.floor(window.innerHeight / 20) * 20 <= snakeHead.offsetTop) {
    youLost();
  }
  checkTail();
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
  if (
    direction == "ArrowRight" &&
    (lastTurn === "vertical" || lastTurn === "")
  ) {
    clearInterval(interval);
    interval = setInterval(snakeMovingRight, 200);
  } else if (
    direction == "ArrowLeft" &&
    (lastTurn === "vertical" || lastTurn === "")
  ) {
    clearInterval(interval);
    interval = setInterval(snakeMovingLeft, 200);
  } else if (
    direction == "ArrowUp" &&
    (lastTurn === "horizental" || lastTurn === "")
  ) {
    clearInterval(interval);
    interval = setInterval(snakeMovingUP, 200);
  } else if (
    direction == "ArrowDown" &&
    (lastTurn === "horizental" || lastTurn === "")
  ) {
    clearInterval(interval);
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
    (
      Math.floor((Math.random() * (window.innerHeight - 60)) / 20) * 20 +
      40
    ).toString() + "px";
  food.style.top =
    (
      Math.floor((Math.random() * (window.innerHeight - 60)) / 20) * 20 +
      40
    ).toString() + "px";
};

changeFoodPos();
let tally = 0;

const eatingFood = () => {
  if (
    food.style.left === snakeHead.style.left &&
    food.style.top === snakeHead.style.top
  ) {
    changeFoodPos();
    addLength();
    tally++;
  }
};

const createElement = (tag, attributes) => {
  const el = document.createElement(tag);
  attributes = attributes || {};
  for (let attr in attributes)
    attributes.hasOwnProperty(attr) && el.setAttribute(attr, attributes[attr]);
  return el;
};

let newTail = "new-tail";

const addLength = () => {
  const addTail = createElement("div", { class: newTail });
  document.body.appendChild(addTail);
};

let positionArray = [];
let positionObject = {};
let x = 0;
let y = 0;
tail = document.getElementsByClassName("new-tail");

const addPositon = () => {
  positionObject = {
    x: document.getElementById("snake-head").offsetLeft,
    y: document.getElementById("snake-head").offsetTop,
  };
  positionArray.push(positionObject);
};
const tailPosition = () => {
  for (let index = 0; index < tally; index++) {
    document.getElementsByClassName("new-tail")[index].style.left =
      positionArray[positionArray.length - (index + 2)].x.toString() + "px";

    document.getElementsByClassName("new-tail")[index].style.top =
      positionArray[positionArray.length - (index + 2)].y.toString() + "px";
  }
};

setInterval(() => {
  if (positionArray.length > 1000) {
    positionArray.shift();
  }
}, 200);

const youLost = () => {
  clearInterval();
  alert(`youLost
  your score is: ${tally}`);
  snakeMovingDown = {};
  snakeMovingLeft = {};
  snakeMovingRight = {};
  snakeMovingUP = {};
};
let y2 = snakeHead.offsetTop;
x2 = snakeHead.offsetLeft;

const checkTail = () => {
  for (let index = 0; index < tally; index++) {
    y2 = snakeHead.offsetTop;
    x2 = snakeHead.offsetLeft;
    if (
      positionArray[positionArray.length - (index + 2)].x === x2 &&
      positionArray[positionArray.length - (index + 2)].y === y2
    ) {
      youLost();
    }
  }
};

let tailArray = document.getElementsByClassName("new-tail");
