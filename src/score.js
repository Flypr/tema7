import {
	ctx
} from './canvas';
var score = 0;

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Score: " + score, 8, 20);
}

function setScore(val) {
	score = val;
}

export {
	score,
	setScore,
	drawScore
};