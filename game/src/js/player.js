class Player{
	constructor(painter){
		
		this.hp = 100;
		
		this.collEnemy = false;

		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;

		this.height = 60;
		this.widht = 64;
		this.jumpCount = 0;
		this.jumpLength = 50;
		this.jumpHeight = 0;

		this.x = 0;
		this.playerY = 49;
		this.basicPlayerY = 49;
	
		this.painter = painter;
		this.img  = new Image();
		this.img.src = "images/players/timon.png";
	}
	

	drawPlayer(){
		this.painter.drawImage(this.img, 18, 0, 24, 30, this.x, this.painter.canvas.height - this.height - this.jumpHeight - this.playerY, this.widht, this.height);
	}

	movePlayer(){
		if(this.rightPressed  && this.x < this.painter.canvas.width-this.widht && this.playerY > this.basicPlayerY - 1) {
			this.x += 7;
		}else if(this.leftPressed && this.x > 0 && this.playerY > this.basicPlayerY - 1) {
			this.x -= 7;
		}
		if(this.upPressed){
			this.jumpCount++;
			this.jumpHeight = 4*this.jumpLength*Math.sin(Math.PI*this.jumpCount/this.jumpLength);
		}
		if(this.jumpCount > 50){
			this.jumpCount = 0;
			this.upPressed = false;
			this.jumpHeight = 0;
		}
		if(this.downPressed && this.playerY > this.basicPlayerY - this.height && !this.upPressed) {
			this.playerY -= 9;
		}
		if(!this.downPressed && this.playerY < this.basicPlayerY) {
			this.playerY += 9;
		}

		this.drawPlayer()
		}



}