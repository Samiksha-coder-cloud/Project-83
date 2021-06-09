var mouseEvent="empty";
var currentPosition_X;
var currentPosition_Y;
var lastPosition_X;
var lastPosition_Y;
var width=screen.width;
var newWidth=screen.width - 60;
var newHeight=screen.height - 100;

if (width < 992) {
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden";
}

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",myMousedown);
canvas.addEventListener("touchstart",mytouchStart);

function myMousedown (e) {
    colour=document.getElementById("colour_input").value;
    width=document.getElementById("width_input").value;
    mouseEvent="mousedown";
}

function mytouchStart (e) {
    colour=document.getElementById("colour_input").value;
    width=document.getElementById("width_input").value;
    lastPosition_X=e.touches[0].clientX - canvas.offsetLeft;
    lastPosition_Y=e.touches[0].clientY - canvas.offsetTop;
    console.log(mytouchStart);
}

canvas.addEventListener("mouseleave",myMouseLeave);
canvas.addEventListener("mouseup",myMouseUp);
canvas.addEventListener("mousemove",myMouseMove);

function myMouseLeave(e) {
    mouseEvent="mouseLeave";
}

function myMouseUp(e) {
    mouseEvent="mouseUp"
}

function myMouseMove(e) {
    currentPosition_X=e.clientX-canvas.offsetLeft;
    currentPosition_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;

        console.log("Last Position of x and y Coordinates= ");
        console.log("x = " + lastPosition_X + "y = " + lastPosition_Y);
        ctx.moveTo(lastPosition_X,lastPosition_Y);

        console.log("Current Position of x and y Coordinates= ");
        console.log("x = " + currentPosition_X + "y = " + currentPosition_Y);
        ctx.lineTo(currentPosition_X,currentPosition_Y);
        ctx.stroke();

        lastPosition_X=currentPosition_X;
        lastPosition_Y=currentPosition_Y
    }
}


canvas.addEventListener("touchmove",mytouchMove);

function mytouchMove(e) {
    currentPosition_X=e.touches[0].clientX-canvas.offsetLeft;
    currentPosition_Y=e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;

        console.log("Last Position of x and y Coordinates= ");
        console.log("x = " + lastPosition_X + "y = " + lastPosition_Y);
        ctx.moveTo(lastPosition_X,lastPosition_Y);

        console.log("Current Position of x and y Coordinates= ");
        console.log("x = " + currentPosition_X + "y = " + currentPosition_Y);
        ctx.lineTo(currentPosition_X,currentPosition_Y);
        ctx.stroke();

        lastPosition_X=currentPosition_X;
        lastPosition_Y=currentPosition_Y
}

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
