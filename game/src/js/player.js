class Player{
	constructor(painter){
			this.x = 0;
			this.y = 581;
			this.painter = painter;
			this.img  = new Image();
			this.img.src = "images/players/timon.png";
	}

	drawPlayer(){
		this.painter.drawImage(this.img, 19, 0, 24, 30, this.x, this.y, 24*3, 30*3);
	}



}