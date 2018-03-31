var Spaceship = function(_x, _y) {
    this.xPos = _x;
    this.yPos = _y;
    this.direction = 0;

    this.mouseDown = function(_dir) {
        this.direction = _dir;
    }
    
    this.draw = function() {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.xPos, this.yPos + 30, 30, 70)
        this.xPos += this.direction;
    }

    // this update function will receive a prop, that will help it understand if
    // the spaceship should move right or left.
    this.update = function(magnitude) {
        this.xPos += magnitude;
    }
}