var isFinished = false;
var spaceship;
var bulletArray = [];
var alienArray = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    spaceship = new Spaceship(width/2, height - 60);
    resetGame();
}

function resetGame() {
    for(var index = 0; index < 10; index++) {
        alienArray.push(new Alien(index * (width/10) + 30));
    }
}
function keyPressed() {
    
    if(keyCode === 32) { // fire gun
        bulletArray.push(new Bullet(spaceship.xPos, 10));
    }
    if(keyCode === 37) { // move left   
        spaceship.mouseDown(-5);
    } else if(keyCode === 39) { // move right
        spaceship.mouseDown(5);
    }
}

function keyReleased() {
    if(keyCode !== 32) {
        spaceship.direction = 0;
    }
    
}

function draw() {
    background(115, 0, 23);
    spaceship.draw();
    if(alienArray.length === 0) {
        alert("YOU WON!");
        resetGame();
    } else {
        for(var index = bulletArray.length - 1; index >= 0; index--) {
            if(bulletArray[index].isHit) {
                bulletArray.splice(index, 1);
            }else {
                bulletArray[index].move();
            }
        }
        for(var index = alienArray.length - 1; index >= 0; index--) {
            if(alienArray[index].isDead) {
                alienArray.splice(index, 1);
            } else {
                alienArray[index].draw();
            }
        }
    }
}