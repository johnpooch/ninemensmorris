coordinatesBoardArray = []
ownershipBoardArray = []

boardDimension = 7

coordinatesBoardArray = [[0 for x in range(boardDimension)] for y in range(boardDimension)] 
ownershipBoardArray = [[0 for x in range(boardDimension)] for y in range(boardDimension)] 

nullCoordinatesList = [[2,3,5,6],[1,3,5,7],[1,2,6,7],[4],[1,2,6,7],[1,3,5,7],[2,3,5,6]]

player = 1

def createCoordinatesBoard():
    for i in range(boardDimension): 
        for j in range(boardDimension):
            coordinatesBoardArray[i][j] = [i + 1, j + 1]
    
def zeroNullCoordinates ():
    for h in range(boardDimension):
        for i in range(boardDimension):
            for j in nullCoordinatesList[h]:
                if(coordinatesBoardArray[h][i][1] == j):
                    coordinatesBoardArray[h][i][1] = 0
                    coordinatesBoardArray[h][i][0] = 0
            
def printCoordinatesBoard():
    for i in range(boardDimension): 
        print(coordinatesBoardArray[i])
        
def createOwnershipBoard():
    for i in range(boardDimension): 
        for j in range(boardDimension):
            ownershipBoardArray[i][j] = "    "
        
def printOwnershipBoard():
    for i in range(boardDimension): 
        print(ownershipBoardArray[i])
        
def userTurn(player):
    userInput = [0,0];
    if(player == 1):
        userInput[0] = int(input("P1 enter y-coordinate of piece: "))
        userInput[1] = int(input("P1 enter x-coordinate of piece: "))
    if(player == 2):
        userInput[0] = int(input("P2 enter y-coordinate of piece: "))
        userInput[1] = int(input("P2 enter x-coordinate of piece: "))
    
    if coordinatesBoardArray[userInput[0]][userInput[1]] == [0,0]:
        print("You can't place a piece here.")
        
    else: 
        if(player == 1):
            ownershipBoardArray[userInput[0]][userInput[1]] = "whit"
            printOwnershipBoard()
            userTurn(2)
        elif(player == 2):
            ownershipBoardArray[userInput[0]][userInput[1]] = "blak"
            printOwnershipBoard()
            userTurn(1)
        
createCoordinatesBoard()
zeroNullCoordinates()
printCoordinatesBoard()
print('\n\n')
createOwnershipBoard()
printOwnershipBoard()

while(True):
    userTurn(player)
