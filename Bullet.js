var Bullet = function(_x, _radius) {
    this.xPos = _x;
    this.yPos = height - 70;
    this.radius = 10;

    this.draw = function() {
        fill(106, 0, 173);
        ellipse(this.xPos, this.yPos, this.radius);
    }
    this.move = function() {
        this.yPos -= 15;
        this.draw();
    }
}