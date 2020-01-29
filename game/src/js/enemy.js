class Enemy {
	constructor(painter, x, y) {
		this.painter = painter;
		this.img = new Image();
		this.img.src = "images/players/giena.png";
		this.x = 400;
		this.y = 44;
		this.spanwPoint = 0;
		this.distanceToPlayer = 1000;
		this.width = 100;
		this.height = 100;
		this.leftToPlayer = false;
		this.rightToPlayer = false;
	}

	draw() {
		this.painter.drawImage(this.img, 1270, 155, 80, 70, this.x, this.painter.canvas.height - this.height - this.y, this.width, this.height);
		this.attack();
		this.move();
	}

	move() {
		this.x -= 0;
	}

	attack(){
		if(enigne.checkCollisionPlayer(this) && !enigne.player.collEnemy){
			enigne.player.collEnemy = true;
			enigne.player.hp -= 30;
		}
		if(enigne.checkCollisionPlayer(this) == false){
			enigne.player.collEnemy = false;
		}
	}


}