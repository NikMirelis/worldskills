class Enemy {
	constructor(painter) {
		this.painter = painter;
		this.img = new Image();
		this.img.src = "images/players/giena.png";

		this.x = 400;
		this.y = 44;
		this.width = 100;
		this.height = 100;

		this.limitRight = this.x + 250;
		this.limitLeft = this.x - 250;
		this.limitLeftExceded = true;
		this.limitRightExceded = false;
	}

	draw() {
		this.painter.drawImage(this.img, 1270, 155, 80, 70, this.x, this.painter.canvas.height - this.height - this.y, this.width, this.height);
		this.attack();
		this.move();
	}

	move() {
 		if(this.x <= this.limitLeft){
			this.limitLeftExceded = true;
			this.limitRightExceded = false;
		}
		if(this.x >= this.limitRight){
			this.limitLeftExceded = false;
			this.limitRightExceded = true;
		}
		if(this.limitLeftExceded){
			this.x += 7;
		}
		if(this.limitRightExceded){
			this.x -= 7;
		}
	}

	attack(){
		if(engine.checkCollisionPlayer(this) && !engine.player.collEnemy){
			engine.player.collEnemy = true;
			engine.player.hp -= 30;
		}
		if(engine.checkCollisionPlayer(this) == false){
			engine.player.collEnemy = false;
		}
	}


}