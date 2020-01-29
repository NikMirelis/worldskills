class Player{
	constructor(painter){
		this.painter = painter;
		this.img  = new Image();
		this.img.src = "images/players/timon.png";

		this.hp = 100;
		this.height = 60;
		this.widht = 64;
		this.x = 0;
		this.y = 49;
		this.basicY = 49;

		this.leftPressed = false;
		this.rightPressed = false;
		this.upPressed = false;
		this.downPressed = false;

		this.jumpCount = 0;
		this.jumpLength = 50;
		this.jumpHeight = 0;

		this.collEnemy = false;
	}
	

	draw(){
		this.painter.drawImage(this.img, 18, 0, 24, 30, this.x, this.painter.canvas.height - this.height - this.jumpHeight - this.y, this.widht, this.height);
		this.stop();
		this.move();
	}

	move(){
		if(this.rightPressed  && this.x < this.painter.canvas.width-this.widht && this.y > this.basicY - 1) {
			this.x += 7;
		}else if(this.leftPressed && this.x > 0 && this.y > this.basicY - 1) {
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
		if(this.downPressed && this.y > this.basicY - this.height && !this.upPressed) {
			this.y -= 9;
		}
		if(!this.downPressed && this.y < this.basicY) {
			this.y += 9;
		}	
		}

		stop() {
			if(this.x >= ((this.painter.canvas.width-this.widht)/2)) {
				this.x -= 7;
				enigne.map.scroll();
			}
			if(!enigne.map.bgMove){
				this.x += 7;
			}
		}



}