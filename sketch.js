var isFinished = false;
var spaceship;
var bulletArray = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    spaceship = new Spaceship(width/2, height - 60);
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
    for(var index = 0; index < bulletArray.length; index++) {
        bulletArray[index].move();
    }
}