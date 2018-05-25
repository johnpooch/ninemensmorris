import os

from flask import Flask, redirect, render_template, request

app = Flask(__name__)





validPositionsList = [[0,3,6],[1,3,5],[2,3,4],[0,1,2,4,5,6],[2,3,4],[1,3,5],[0,3,6]]

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

# Use c profiler to check speed: python3 -m cProfile boggle.py 
# Build testing





# def getCoordinatesFromUser(currentPlayer):

#     y = 
#     x = 
#     return (x, y)
    
# def threeInARow(gameBoardDictionary):
#     for position in middlePositions:
#         if(checkNeighboursAreSameColor(position)):
#             return True
            

# def checkNeighboursAreSameColor(position):
#     for i in neighboursDictionary[position]:
#         for j in neighboursDictionary[position]:
#             if (gameBoardDictionary[i] == gameBoardDictionary[j]) and (i != j) and (gameBoardDictionary[i] != "empty") and ((i[0] == j[0]) or (i[1] == j[1])):
#                 return True
#     return False

# def removeOpponentPiece(currentPlayer):
#     positionToRemove = getCoordinatesFromUser(currentPlayer)
#     if (gameBoardDictionary[(positionToRemove)] != "empty" and gameBoardDictionary[(positionToRemove)] != playerColorDict[currentPlayer]): 
#         gameBoardDictionary[(positionToRemove)] = "empty"
#         return gameBoardDictionary
        
#     else:
#         print ("Invalid move")
#         removeOpponentPiece(currentPlayer)
        
# def placePiecesPhase(gameBoardDictionary):
#     for i in range(9):
#         gameBoardDictionary = userTurn(1, gameBoardDictionary)
#         gameBoardDictionary = userTurn(2, gameBoardDictionary)
#     print("all pieces placed")
#     return gameBoardDictionary

# def play(gameBoardDictionary):
    
#     gameBoardDictionary = placePiecesPhase(gameBoardDictionary);
    
gameBoardDictionary = {}

def createGameBoard():
    gameBoardDictionary = {(i, j) : "empty" for i in range(7) for j in range(7) for k in validPositionsList[i] if j == k}
    return gameBoardDictionary
    
def placePiece(position, currentPlayer):
    if (gameBoardDictionary[position] == "empty"): 
        gameBoardDictionary[(position)] = currentPlayer
        return gameBoardDictionary
    else:
        print ("Invalid move")
    
gameBoardDictionary = createGameBoard()

@app.route("/")
def get_index():
    return render_template("index.html", gameBoardDicitonary=gameBoardDictionary)
    
@app.route("/accept_user_input/<player>", methods=['GET', 'POST'])
def accept_user_input(player):
    
    position = tuple(map(int, request.form['position'].split(' ')))
    gameBoardDictionary = placePiece(position, player)
    
    if player == "white":
        player = "black"
    else:
        player = "white"
        
    print(player)
        
    return render_template("index.html", gameBoardDicitonary=gameBoardDictionary)

app.run(host=os.getenv('IP'), port=int(os.getenv('PORT')), debug=True)