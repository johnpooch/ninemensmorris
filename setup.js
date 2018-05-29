
// createGameBoard --------------------------------------------------------------------------------

function createGameBoard() {
    var gameBoard = {};
    for (var i = 0; i < sortedPositions.length; i++) {
        gameBoard[sortedPositions[i]] = "empty";
    }
    return gameBoard;
}
// ------------------------------------------------------------------------------------------------

var gameBoard = createGameBoard();