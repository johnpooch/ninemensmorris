function createGameBoard() {
    var gameBoard = {};
    for (var i = 0; i < sortedPositions.length; i++) {
        gameBoard[sortedPositions[i]] = "empty";
    }
    return gameBoard;
}

function updateGameBoard(position) {
    if (gameBoard[position] == "empty") {
        gameBoard[position] = currentPlayer;
    }
    console.log("GameBoard updated.")
    return gameBoard
}


function checkForMill(gameBoard, currentPlayer) {
    for (var i = 0; i < millCombinations.length; i++) {
        var winning = true;
        for (var j = 0; j < millCombinations[i].length; j++) {
            if (gameBoard[millCombinations[i][j]] != currentPlayer) {
                winning = false;
            }
        }
        if (winning) {
            return i;
        }
    }
    return -1;
}

function changePlayer() {
    if (currentPlayer == "white") {
        return "black";
    }
    else {
        return "white";
    }
}
var gameBoard = createGameBoard()
console.log(gameBoard);

function emptyClicked(position) {
    if (gameMode == "placePiece") {
        placePiece(position);
    }
}

function pieceClicked(position) {
    if (gameMode == "removePiece") {
        removePiece(position);
    }
}

function placePiece(position) {
    console.log(gameMode);

    gameBoard = updateGameBoard(position);
    displayNewPiece(position, currentPlayer);

    if (checkForMill(gameBoard, currentPlayer) != -1) {
        console.log("Mill!");
        gameMode = "removePiece";
    }
    else {
        currentPlayer = changePlayer();
    }
}

function updateGameBoardRemove(currentPlayer) {
    if (gameBoard[position] != "empty" && gameBoard[position] != currentPlayer) {
        gameBoard[position] = "empty";
    }
    console.log("GameBoard updated.")
    return gameBoard

    return true;
}

function removePiece(position) {
    updateGameBoardRemiove(position, currentPlayer);
    gameMode = "placePiece";
    currentPlayer = changePlayer();
}
