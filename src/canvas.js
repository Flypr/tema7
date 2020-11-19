var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setX(val) {
	x = val;
}
function setY(val) {
	y = val;
}

export {
    canvas,
    ctx,
    x,
    y,
    clearCanvas,
    setX,
    setY
};