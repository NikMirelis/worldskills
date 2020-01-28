class Enemy {
	constructor(painter) {
		this.painter = painter;
		this.img = new Image();
		this.img.src = "images/players/giena.png";
		this.x = 1100;
		this.y =  44;
		this.spanwPoint = 0;
		this.distanceToPlayer = 1000;
		this.width = 100;
		this.height = 100;
		this.leftToPlayer = false;
		this.rightToPlayer = false;

		this.player = new Player();
	}
	drawEnemy() {
		this.painter.drawImage(this.img, 1270, 155, 80, 70, this.x, this.painter.canvas.height - this.height - this.y, this.width, this.height);
		this.moveEnemy();
	}

	moveEnemy() {
		this.x -= 7;
	}


}