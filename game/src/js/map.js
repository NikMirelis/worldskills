class Map {
	constructor(painter){
		this.painter = painter;

		this.bgMove = true;
		this.topX = 1280;
		this.topY = 0;
		this.x = 0;
		this.y = 0;

		this.bg = new Image();
		this.bg.src = "images/background.png";
	}

	draw() {
		this.background();
		this.ground();	
	}

	scroll(){
		this.x -= 7;
		this.bgMove = true;
		if(this.x <= -1280){
			this.x += 7;
			this.bgMove = false;
		}
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
}