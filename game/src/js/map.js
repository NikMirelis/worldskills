class Map {
	constructor(painter){
		this.painter = painter;

		this.x = 0;
		this.y = 0;

		this.bg = new Image();
		this.bg.src = "images/background.png";
	}

	draw() {
		this.background();
		this.ground();	
	}


	background(){
		this.painter.drawImage(this.bg, this.x, this.y, 2560, 720);
		this.ground();
	}

	ground(){
		this.painter.beginPath();
		this.painter.rect(0, 670, 1280, 50);
		this.painter.fillStyle = "#395709";
		this.painter.fill();
	}

	scroll(){
		this.x -= 7;
	}
}