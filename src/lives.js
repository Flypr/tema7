import {
	ctx,
	canvas
} from './canvas';

var lives = 3;

function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function setLives(val) {
	lives = val;
}

export {
	lives,
	setLives,
	drawLives
};