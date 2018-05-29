function displayNewPiece(position) {
    var svg = document.getElementsByTagName('svg')[0];
    var div = document.createElement('div');
    div.setAttribute('class', 'piece ' + currentPlayer);

    leftPosition = 10 + (position[0]*scaleMultiplier);
    topPosition = 80 + (position[1]*scaleMultiplier);

    div.style.left = leftPosition + "px";
    div.style.top = topPosition + "px";
    
    div.setAttribute("onclick", "pieceClicked([" + position[0] + "," + position[1] +"])");
    document.body.appendChild(div);
    console.log("Piece placed on Board.")
}