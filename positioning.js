
var linePositions = [[0,0,6,0],[1,1,5,1],[2,2,4,2],[0,3,2,3],[4,3,6,3],[2,4,4,4],[1,5,5,5],[0,6,6,6],[0,0,0,6],[6,0,6,6],[1,1,1,5],[5,1,5,5],[2,2,2,4],[4,2,4,4],[3,0,3,2],[3,4,3,6]];

var scaleMultiplier = 100;
var borderValue = 50;

function draw_space(x, y) {
    var svg = document.getElementsByTagName('svg')[0];
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    
    var xScaled =  (x * scaleMultiplier) + borderValue;
    var yScaled =  (y * scaleMultiplier) + borderValue;
    
    circle.setAttribute("cx",xScaled); 
    circle.setAttribute("cy",yScaled); 
    circle.setAttribute("r","10");
    circle.setAttribute("fill", "black"); 
    circle.setAttribute("stroke","black");
    circle.setAttribute("onclick", "emptyClicked([" + x + "," + y +"])");
    svg.appendChild(circle);
}

function draw_line(x1,y1,x2,y2) {
    var svg = document.getElementsByTagName('svg')[0]; //Get svg element
    var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    
    var x1Scaled =  (x1 * scaleMultiplier) + borderValue;
    var y1Scaled =  (y1 * scaleMultiplier) + borderValue;
    var x2Scaled =  (x2 * scaleMultiplier) + borderValue;
    var y2Scaled =  (y2 * scaleMultiplier) + borderValue;
    
    line.setAttribute("x1",x1Scaled); 
    line.setAttribute("y1",y1Scaled); 
    line.setAttribute("x2",x2Scaled); 
    line.setAttribute("y2",y2Scaled); 
    line.setAttribute("fill", "black"); 
    line.setAttribute("stroke","black");
    svg.appendChild(line);
}

sortedPositions.forEach(function(position) {
    draw_space(position[0], position[1])
})

linePositions.forEach(function(position) {
    draw_line(position[0], position[1], position[2], position[3]);
})