class Game{
	constructor(){
		let canvas = document.getElementById("game");
		this.painter = canvas.getContext("2d");
		this.player = new Player(this.painter, 100, "Тимон", "test");
		this.bg = new Image();
		this.bg.src = "images/background.png";
		document.addEventListener("keydown", this.checkKeyDown.bind(this), false);
		document.addEventListener("keyup", this.checkKeyUp.bind(this), false);
	}

	run(){
		setInterval(() => {
			this.drawBackground();
			this.player.move();
			this.player.drawPlayer();
		}, 100);
		
	}
	drawPrint() {
		this.painter.fillText("Работает", 10, 50);
	}

	drawBackground(){
		this.painter.drawImage(this.bg, 0, 0, 1280, 720);
		this.drawGround();
	}

	drawGround(){
		this.painter.beginPath();
		this.painter.rect(0, 670, 1280, 50);
		this.painter.fillStyle = "#395709";
		this.painter.fill();
	}

	checkKeyDown(e){
		let keyId = e.keycode || e.which;
		let keyDown = String.fromCharCode(keyId);
		if(keyDown) {

		}
		switch(keyDown) {
			case "D":
				this.player.isMove = true;
				this.player.direction = "right";
				break;
			case "A":
				this.player.isMove = true;
				this.player.direction = "left";
				break;
		}
	}
	checkKeyUp(e){
		let keyId = e.keycode || e.which;
		let keyUp = String.fromCharCode(keyId);
		switch(keyUp) {
			case "D":
				this.player.isMove = false;
				break;
			case "A":
				this.player.isMove = false;
				break;
		}
	}
}