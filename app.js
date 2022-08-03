const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";

function startGame() {
  playerText.textContent = `${player}'s Turn!`;
  blocks.forEach((block) =>
    block.addEventListener("click", () => chooseArea(block))
  );

  function chooseArea(block) {
    if (block.textContent === "") {
      block.textContent = player;
      turnPlayer();
    } else {
      errorText.textContent = "it's not empty";
      block.style.border = "2px solid red";
    }
    setTimeout(() => {
      errorText.textContent = "";
      block.style.border = "1px solid black";
    }, 2500);
    checkWin();
    checkTie();
  }
  function turnPlayer() {
    if (player === "X") {
      player = "O";
      playerText.textContent = `${player}'s Turn!`;
      return;
    } else if (player === "O") {
      player = "X";
      playerText.textContent = `${player}'s Turn!`;
      return;
    }
  }

  function checkWin() {
    checkRows();
    checkColumns();
    checkDiagonals();
  }
  function checkTie() {}
  function checkRows() {
    let row1 =
      blocks[0].textContent == blocks[1].textContent &&
      blocks[0].textContent == blocks[1].textContent &&
      blocks[0].textContent !== "";
    if (row1) console.log(`Oyun Bitti`);
  }
  function checkColumns() {}
  function checkDiagonals() {}
}
startGame();
