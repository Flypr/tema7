import './index.css'
import {clearCanvas} from './canvas';
import {drawBricks, collisionDetection} from './bricks';
import {drawBall, updateBallPosition} from './ball';
import {drawScore} from './score';
import {drawLives} from './lives';
import {drawPaddle, updatePaddlePosition} from './paddle';

function draw() {
	clearCanvas();
	
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();
	
	requestAnimationFrame(draw);
}

draw();