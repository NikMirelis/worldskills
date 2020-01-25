class Enemy {
	constructor(painter) {
		this.painter = painter;
		this.img = new Image();
		this.img.src = "images/players/giena.png";
		this.enemyX = 1100;
		this.enemyY = 530;
		this.distanceToPlayer = 1000;
		this.width = 24;
		this.height = 30;


	}
	drawEnemy() {
		this.painter.drawImage(this.img, 0, 75, 80, 80, this.enemyX, this.enemyY, this.width*5, this.height*5);
		this.moveEnemy();
	}

	moveEnemy() {
		if(this.distanceToPlayer < 500 && this.distanceToPlayer > -500) {
			this.enemyX -= 0;
		}
		if(game.checkColisionPlayer(this)){
			this.player.hp -= 100;
			console.log(this.hp);
		}
	}

	checkDistanceToPlayer(playerX) {
		this.distanceToPlayer = this.enemyX - playerX;
	}

}