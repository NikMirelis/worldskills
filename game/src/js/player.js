class Player{
	constructor(painter){
	
		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;

		this.height = 30;
		this.widht = 24;
		this.jumpCount = 0;
		this.jumpLength = 50;
		this.jumpHeight = 0;

		this.playerX = 0;
		this.playerY = 109;
	
		this.painter = painter;
		this.img  = new Image();
		this.img.src = "images/players/timon.png";
	}


	drawPlayer(){
		this.painter.drawImage(this.img, 18, 0, 24, 30, this.playerX, this.painter.canvas.height - this.height - this.jumpHeight - this.playerY, this.widht*3, this.height*3);
	}

	movePlayer(){
		if(this.rightPressed  && this.playerX < this.painter.canvas.width-this.widht && this.playerY > 108) {
			this.playerX += 7;
		}else if(this.leftPressed && this.playerX > 0 && this.playerY > 108) {
			this.playerX -= 7;
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
		if(this.downPressed && this.playerY > 20){
			this.playerY -= 9;
		}
		if(!this.downPressed && this.playerY < 109) {
			this.playerY += 9;
		}

		this.drawPlayer()
		}



}