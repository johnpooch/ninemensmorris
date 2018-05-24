
validPositionsList = [[0,3,6],[1,3,5],[2,3,4],[0,1,2,4,5,6],[2,3,4],[1,3,5],[0,3,6]]
# nullColumnsList = [[2,3,5,6],[1,3,5,7],[1,2,6,7],[4],[1,2,6,7],[1,3,5,7],[2,3,5,6]]

playerColorDict = {1: "white", 2: "black"}

middlePositions = [(0,3), (1,3), (2,3), (3,0), (3,1), (3,2), (3,4), (3,5), (3,6), (4,3), (5,3), (6,3)]

neighboursDictionary = {
    (0,0) : [(0,3), (3,0)],
    (0,3) : [(0,0), (0,6), (1,3)],
    (0,6) : [(0,3), (3,6)],
    (1,1) : [(1,1), (1,3), (1,5)],
    (1,3) : [(1,1), (1,5), (2,3), (0,3)],
    (1,5) : [(1,3), (3,5)],
    (2,2) : [(2,3), (3,2)],
    (2,3) : [(2,2), (2,4), (1,3)],
    (2,4) : [(2,3), (3,4)],
    (3,0) : [(3,1), (6,0), (0,0)],
    (3,1) : [(3,0), (3,2), (5,1), (1,1)], 
    (3,2) : [(3,1), (4,2), (2,2)],
    (3,4) : [(3,5), (4,4), (2,4)], 
    (3,5) : [(3,4), (3,6), (5,5), (1,5)], 
    (3,6) : [(3,5), (6,6), (0,6)],
    (4,2) : [(4,3), (3,2)],
    (4,3) : [(4,2), (4,4), (5,3)],
    (4,4) : [(4,3), (3,4)],
    (5,1) : [(3,1), (5,3)],
    (5,3) : [(5,1), (5,5), (6,3), (4,3)],
    (5,5) : [(5,3), (3,5)],
    (6,0) : [(6,3), (3,0)],
    (6,3) : [(6,0), (6,6), (5,3)],
    (6,6) : [(6,3), (3,6)]
}

# Use c profiler python3 -m cProfile boggle.py

gameBoardDictionary = {}

def createGameBoard():
    gameBoardDictionary = {(i, j) : "empty" for i in range(7) for j in range(7) for k in validPositionsList[i] if j == k}
    return gameBoardDictionary

def userTurn(currentPlayer, gameBoardDictionary):
    
    positionToPlace = getCoordinatesFromUser(currentPlayer)
    
    if (gameBoardDictionary[positionToPlace] == "empty"): 
        
        gameBoardDictionary[(positionToPlace)] = playerColorDict[currentPlayer]
        if(threeInARow(gameBoardDictionary)):
            print("Three in a Row!")
            gameBoardDictionary = removeOpponentPiece(currentPlayer)
            
        print(gameBoardDictionary)
        return gameBoardDictionary
        
    else:
        print ("Invalid move")
        userTurn(currentPlayer, gameBoardDictionary)

def getCoordinatesFromUser(currentPlayer):

    y = int(input("P{} enter y-coordinate of piece: ".format(currentPlayer)))
    x = int(input("P{} enter x-coordinate of piece: ".format(currentPlayer)))
    return (x, y)
    
def threeInARow(gameBoardDictionary):
    for position in middlePositions:
        if(checkNeighboursAreSameColor(position)):
            return True
            

def checkNeighboursAreSameColor(position):
    for i in neighboursDictionary[position]:
        for j in neighboursDictionary[position]:
            if (gameBoardDictionary[i] == gameBoardDictionary[j]) and (i != j) and (gameBoardDictionary[i] != "empty") and ((i[0] == j[0]) or (i[1] == j[1])):
                return True
    return False

def removeOpponentPiece(currentPlayer):
    positionToRemove = getCoordinatesFromUser(currentPlayer)
    if (gameBoardDictionary[(positionToRemove)] != "empty" and gameBoardDictionary[(positionToRemove)] != playerColorDict[currentPlayer]): 
        gameBoardDictionary[(positionToRemove)] = "empty"
        return gameBoardDictionary
        
    else:
        print ("Invalid move")
        removeOpponentPiece(currentPlayer)

def play(gameBoardDictionary):
    userTurn(1, gameBoardDictionary)
    userTurn(2, gameBoardDictionary)
    
gameBoardDictionary = createGameBoard()
while(True):
    play(gameBoardDictionary)
