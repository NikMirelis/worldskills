class Game{
	constructor(){
		var canvas = document.getElementById("game");
		this.painter = canvas.getContext("2d");
		
		this.player = new Player(this.painter);
		this.enemy = new Enemy(this.painter);

		this.bg = new Image();
		this.bg.src = "images/background.png";

		document.addEventListener("keydown", this.checkKeyDown.bind(this), false);
		document.addEventListener("keyup", this.checkKeyUp.bind(this), false);
	}

	run(){
		setInterval(() => {
			this.painter.clearRect(0,0, 1280, 720);
			this.drawBackground();
			this.player.movePlayer();
			this.enemy.drawEnemy();
		}, 10);
		
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

		switch(keyDown) {
			case "D" || 68:
				this.player.rightPressed = true;
				break;
			case "A" || 65:
				this.player.leftPressed = true;
				break;
			case "W" || 87:
				this.player.upPressed = true;
				break;
			case "S" || 83:
				this.player.downPressed = true;
				break;
		}
	}

	checkKeyUp(e){
		let keyId = e.keycode || e.which;
		let keyUp = String.fromCharCode(keyId);
		switch(keyUp) {
			case "D" || "68":
				this.player.rightPressed = false;
				break;
			case "A" || 65:
				this.player.leftPressed = false;
				break;
			case "S" || 83:
				this.player.downPressed = false;
				break;
		}
	}
}