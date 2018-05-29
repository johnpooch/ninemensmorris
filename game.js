
// placePiece -------------------------------------------------------------------------------------

function placePiece(gameState, position) {
    gameState = addPieceToGameBoard(gameState, position);
    displayNewPiece(gameState, position);

    gameState = checkForMill(gameState);
    if(gameState.gameMode != "removePiece") {
        gameState = changePlayer(gameState);
    }
    return gameState;
}

// addPieceToGameBoard ----------------------------------------------------------------------------

function addPieceToGameBoard(gameState, position) {
    if (gameState.gameBoard[position] == "empty") {
        gameState.gameBoard[position] = gameState.currentPlayer;
    }
    return gameState;
}

// displayNewPiece --------------------------------------------------------------------------------

function displayNewPiece(gameState, position) {
    var svg = document.getElementsByTagName('svg')[0];
    var div = document.createElement('div');
    console.log(gameState.currentPlayer);
    div.setAttribute('class', 'piece ' + gameState.currentPlayer);
    div.setAttribute("id", position[0] + "," + position[1]);

    console.log(position);

    var leftPosition = 10 + (position[0]*scaleMultiplier);
    var topPosition = 80 + (position[1]*scaleMultiplier);

    div.style.left = leftPosition + "px";
    div.style.top = topPosition + "px";
    
    div.setAttribute("onclick", "pieceClicked([" + position[0] + "," + position[1] +"])");
    document.body.appendChild(div);
}

// checkForMill -----------------------------------------------------------------------------------

function checkForMill(gameState) {
    for (var i = 0; i < millCombinations.length; i++) {
        var winning = true;
        for (var j = 0; j < millCombinations[i].length; j++) {
            if (gameState.gameBoard[millCombinations[i][j]] != gameState.currentPlayer) {
                winning = false;
            }
        }
        if (winning) {
            gameState.gameMode = "removePiece";
            console.log("Mill!");
            return gameState;
        }
    }
    return gameState;
}

// removePiece ------------------------------------------------------------------------------------

function removePiece(gameState, position) {
    gameState = removePieceFromGameBoard(gameState, position);
    removePieceFromDisplay(position);
    gameState.gameMode = "placePiece";
    gameState = changePlayer(gameState);
    console.log(gameState.currentPlayer);
    return gameState;
}

// removePieceFromGameBoard -----------------------------------------------------------------------

function removePieceFromGameBoard(gameState, position) {
    console.log(gameState);
    console.log(position);
    if (gameState.gameBoard[position] != "empty" && gameState.gameBoard[position] != gameState.currentPlayer) {
        gameState.gameBoard[position] = "empty";
    }
    return gameState;
}

// removePieceFromDisplay -------------------------------------------------------------------------

function removePieceFromDisplay(position) {
    var div = document.getElementById(position[0]+ "," + position[1]).remove();
}

// changePlayer -----------------------------------------------------------------------------------

function changePlayer(gameState) {
    if (gameState.currentPlayer == "white") {
        gameState.currentPlayer = "black";
        return gameState;
    }
    gameState.currentPlayer = "white";
    return gameState;
}

// emptyClicked -----------------------------------------------------------------------------------

function emptyClicked(position) {
    if (gameState.gameMode == "placePiece") {
        gameState = placePiece(gameState, position);
    }
}

// pieceClicked -----------------------------------------------------------------------------------

function pieceClicked(position) {
    if (gameState.gameMode == "removePiece") {
        gameState = removePiece(gameState, position);
    }
}