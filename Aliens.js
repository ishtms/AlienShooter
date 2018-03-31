var Alien = function(_x) {
    this.xPos = _x;
    this.yPos = 50;
    this.health = 100;
    this.radius = 20;
    this.isDead = false;
    
    this.draw = function() {
        if(this.health === 100) {
            fill('green');
        } else if(this.health === 75) {
            fill('yellow');
        } else if(this.health === 50) {
            fill('orange');
        } else if(this.health === 25) {
            fill('red')
        } else {
            fill('black')
        }
        
        ellipse(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
        this.yPos += 0.5;
        if(this.health <= 0) {
            this.isDead = true;
        }
    }

    this.gotHit = function() {
        this.health -= 25;
    }
}