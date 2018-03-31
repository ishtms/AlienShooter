var Bullet = function(_x, _radius) {
    this.xPos = _x;
    this.yPos = height - 70;
    this.radius = 10;
    this.isHit = false;

    this.draw = function() {
        fill(106, 0, 173);
        ellipse(this.xPos, this.yPos, this.radius);

        for(var index = 0; index < alienArray.length; index++) {
            if(dist(this.xPos, this.yPos, alienArray[index].xPos, alienArray[index].yPos) < this.radius + alienArray[index].radius) {
                this.isHit = true;
                alienArray[index].health -= 25;
            }
        }
    }
    this.move = function() {
        this.yPos -= 15;
        this.draw();
    }
}