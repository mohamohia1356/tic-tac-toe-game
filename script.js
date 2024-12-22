const allContainer = makeElement("body", "div", "all-container", null, null);
const h1 = makeElement(".all-container", "h1", null, null, "Tic Tac Toe");
const gameContainer = makeElement(
  ".all-container",
  "div",
  "game-container",
  null,
  null
);
const gameStatus = makeElement(
  ".all-container",
  "h2",
  "game-status",
  null,
  "Start Now Game"
);
const btn = makeElement(".all-container", "button", null, null, "Restart");

var numberOfBox = 8;
for (let i = 0; i <= numberOfBox; i++) {
  makeElement(".game-container", "div", "box", null, null, "indexBox", i);
}
listBox = ["", "", "", "", "", "", "", "", ""];
winnerNumber = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = "X";
let GameStart = true;

const box = document.querySelectorAll(".box");
box.forEach((itemIndex) => {
  itemIndex.addEventListener("click", checkevent);
});

btn.addEventListener("click", restartGame);

function restartGame() {
  GameStart = true;
  currentPlayer = "X";
  listBox = ["", "", "", "", "", "", "", "", ""];
  box.forEach((item) => {
    item.innerHTML = "";
  });
  gameStatus.textContent = "Start Now Game";
}

function checkevent() {
  const clickedbox = this.getAttribute("indexBox");
  if (listBox[clickedbox] != "" || GameStart == false) {
    // console.log(listBox);
    // console.log("yes");
    return;
  } else {
    listBox[clickedbox] = currentPlayer;
    box[clickedbox].textContent = currentPlayer;

    if (currentPlayer == "X") {
      currentPlayer = "O";
      gameStatus.textContent = "O Will Play";
    } else {
      currentPlayer = "X";
      gameStatus.textContent = "X Will Play";
    }
    // console.log(listBox);
    // console.log("no");
  }
  checkWinner();
}

function checkWinner() {
  for (i = 0; i < winnerNumber.length; i++) {
    const winnerRow = winnerNumber[i];
    // console.log(winnerRow[1]);
    const winnerN1 = winnerRow[0];
    const winnerN2 = winnerRow[1];
    const winnerN3 = winnerRow[2];

    if (
      listBox[winnerN1] == "" ||
      listBox[winnerN2] == "" ||
      listBox[winnerN3] == ""
    ) {
      continue;
    }

    if (
      listBox[winnerN1] == listBox[winnerN2] &&
      listBox[winnerN2] == listBox[winnerN3]
    ) {
      GameStart = false;
      gameStatus.textContent = `The Winner is ${listBox[winnerN1]}`;
      return;
    }

    if (!listBox.includes("")) {
      GameStart = false;
      gameStatus.textContent = "GameOver";
      break;
    }
  }
  //   console.log(GameStart);
}

function makeElement(
  getE,
  MakeElement,
  cn,
  id,
  text,
  att = false,
  attName = false
) {
  const getEl = document.querySelector(getE);
  const e = document.createElement(MakeElement);
  if (cn != null) {
    e.className = cn;
  }
  if (id != null) {
    e.id = id;
  }
  if (text != null) {
    e.innerHTML = text;
  }
  if (att != false) {
    e.setAttribute(att, attName);
  }
  getEl.appendChild(e);
  return e;
}
