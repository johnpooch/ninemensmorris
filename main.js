var gameMode = "placePiece";
var currentPlayer = "white";

var sortedPositions = [[0,0],[3,0],[6,0],[1,1],[3,1],[5,1],[2,2],[3,2],[4,2],[0,3],[1,3],[2,3],[4,3],[5,3],[6,3],[2,4],[3,4],[4,4],[1,5],[3,5],[5,5],[0,6],[3,6],[6,6]];

var millCombinations = [
    [[0,0],[3,0],[6,0]],
    [[6,0],[6,3],[6,6]],
    [[0,6],[3,6],[6,6]],
    [[0,0],[0,3],[0,6]],
    
    [[1,1],[3,1],[5,1]],
    [[5,1],[5,3],[5,5]],
    [[1,5],[3,5],[5,5]],
    [[1,1],[1,3],[1,5]],
    
    [[2,2],[3,2],[4,2]],
    [[4,2],[4,3],[4,4]],
    [[2,4],[3,4],[4,4]],
    [[2,2],[2,3],[2,4]],
    
    [[0,3],[1,3],[2,3]],
    [[3,0],[3,1],[3,2]],
    [[4,3],[5,3],[6,3]],
    [[3,4],[3,5],[3,6]],
    ]

var neighbours = {
    "0,0" : [[0,3], [3,0]],
    "3,0" : [[3,1], [6,0], [0,0]],
    "6,0" : [[6,3], [3,0]],
    
    "1,1" : [[1,1], [1,3], [1,5]],
    "3,1" : [[3,0], [3,2], [5,1], [1,1]], 
    "5,1" : [[3,1], [5,3]],
    
    "2,2" : [[2,3], [3,2]],
    "3,2" : [[3,1], [4,2], [2,2]],
    "4,2" : [[4,3], [3,2]],
    
    "0,3" : [[0,0], [0,6], [1,3]],
    "1,3" : [[1,1], [1,5], [2,3], [0,3]],
    "2,3" : [[2,2], [2,4], [1,3]],
    "4,3" : [[4,2], [4,4], [5,3]],
    "5,3" : [[5,1], [5,5], [6,3], [4,3]],
    "6,3" : [[6,0], [6,6], [5,3]],
    
    "2,4" : [[2,3], [3,4]],
    "3,4" : [[3,5], [4,4], [2,4]],
    "4,4" : [[4,3], [3,4]],
    
    "1,5" : [[1,3], [3,5]],
    "3,5" : [[3,4], [3,6], [5,5], [1,5]], 
    "5,5" : [[5,3], [3,5]],
    
    "0,6" : [[0,3], [3,6]],
    "3,6" : [[3,5], [6,6], [0,6]],
    "6,6" : [[6,3], [3,6]]
}