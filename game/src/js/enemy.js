class Enemy {
	constructor(painter) {
		this.painter = painter;
		this.img = new Image();
		this.img.src = "images/players/giena.png";
		this.enemyX = 1100;
		this.enemyY = 530;
		this.width = 24;
		this.height = 30;


	}
	drawEnemy() {
		this.painter.drawImage(this.img, 0, 75, 80, 80, this.enemyX, this.enemyY, this.width*5, this.height*5);
	}


}