const { askForName, playerTurn, exitProgram } = require("./cli");
const { addMatrix, matrix, rowCheck, columnCheck } = require("./matrix");

async function main() {
  const player1 = await askForName("Hi, player 1, what's your name?");
  const player2 = await askForName("Hi, player 2, what's your name?");

  let turn = "player1";

  while (true) {
    
    if (turn === "player1") {
      const turnResponse1 = await playerTurn(player1, "X");
      let resp = addMatrix(turnResponse1,"X");
      if (resp) {
        console.log(matrix);
      } else {
        console.log("cannot replace, try again.");
      }
      
      if (rowCheck(matrix) || columnCheck(matrix)) {
        console.log(`you have won ${turn}`);
        exitProgram();
      }
      turn = "player2";
    } else {
      const turnResponse2 = await playerTurn(player2, "O");
      resp = addMatrix(turnResponse2,"0");
      if (resp) {
        console.log(matrix);
      } else {
        console.log("cannot replace, try again.");
      }
      if (rowCheck(matrix) || columnCheck(matrix)) {
        console.log(`you have won ${turn}`);
        exitProgram();
      }
      turn = "player1";
    }

    //exitProgram();
  }
}

main();
