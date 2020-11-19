import {
    ctx,
    canvas,
    x,
    y,
    setX,
    setY
} from './canvas';
import {
    paddleWidth,
    paddleX,
    setPaddleX
} from './paddle';
import {
    lives,
    setLives
} from './lives';

var ballRadius = 10;

var dx = 2;
var dy = -2;



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function updateBallPosition() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }
    if (y + dy < ballRadius) {
        dy = -dy
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
        } else {
            setLives(lives-1);
            if (!lives) {
                console.log('GAME OVER')
                document.location.reload()
            } else {
                setX(canvas.width / 2)
                setY(canvas.height - 30)
                dx = 3
                dy = -3
                setPaddleX((canvas.width - paddleWidth) / 2)
            }
        }
    }

    setX(x + dx);
    setY(y + dy);
}

function setDy(val) {
    dy = val;
}

export {
    ballRadius,
    dx,
    dy,
    setDy,
    drawBall,
    updateBallPosition
};