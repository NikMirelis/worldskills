class Player{
	constructor(painter){
		
		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;

		this.playerHeight = 30;
		this.playerWidht = 24;
		this.jumpCount = 0;
		this.jumpLength = 50;
		this.jumpHeight = 0;

		this.x = (painter.canvas.width - this.playerWidht)/100;
		this.y = 109;
	
		this.painter = painter;
		this.img  = new Image();
		this.img.src = "images/players/timon.png";
	}

	drawPlayer(){
		this.painter.drawImage(this.img, 18, 0, 24, 30, this.x, this.painter.canvas.height - this.playerHeight - this.jumpHeight - this.y, this.playerWidht*3, this.playerHeight*3);
	}

	movePlayer(){
		
		if(this.rightPressed  && this.x < this.painter.canvas.width-this.playerWidht) {
			this.x += 7;
		}else if(this.leftPressed && this.x > 0) {
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

		this.drawPlayer()
		}



}