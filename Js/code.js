// Requirements for my Assignment
// Showing of  square boxes at different location in the screen
// Square will be of different sizes but of same color
// Distance of mouse pointer from created box to click will calculated
// Distance will be calculate only if he clicks on the square
// Response time will be noted down
function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i=0;i<6;i++){
        color += letters[Math.round(Math.random()*15)];
        }
        return color;
}
var clickedTime;
var createdTime;
var reactioTime;

function  makeBox(event) {
    var time = 1000;
setTimeout(function () {
    function getRadomSizeSquare() {

        width = (Math.random() * 100)+"px";
        return width;
    }

    var top = Math.random();
    top = top * 300;

    var left = Math.random();
    left = left * 400;

    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.left = left + "px";

    document.getElementById("box").style.backgroundColor = getRandomColor();
    var widthy = getRadomSizeSquare();
    document.getElementById("box").style.width = widthy;
    document.getElementById("box").style.height = widthy;
    document.getElementById("box").style.display = "block";
    createdTime = Date.now();

},time);
}

document.getElementById("box").onclick=function (event) {
    clickedTime = Date.now();
    reactioTime = (clickedTime - createdTime)/1000;
    document.getElementById("reactionTime").innerText = "Your reaction time is:"+ reactioTime + "seconds"  + "\n"+ document.getElementById("reactionTime").innerText ;
    this.style.display = "none";
    intialCoordinate = makeBox(event);
    var xFinal = event.clientX;
    var yFinal =event.clientY;

    document.getElementById("distance").innerText = "Your distance is " + xFinal + " " + yFinal +"\n"+ document.getElementById("distance").innerText; //calculateDistance(xFinal,yFinal,intialCoordinate[0],intialCoordinate[1]);

};

function  calculateDistance(xf,yf,xi,yi) {
    return Math.sqrt(Math.pow((xf-xi),2)+Math.pow((yf-yi),2));
}

makeBox();


