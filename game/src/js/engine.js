class Enigne{
	constructor(){
		var canvas = document.getElementById("game");
		this.painter = canvas.getContext("2d");
		
		this.map = new Map(this.painter);
		this.interface = new Interface(this.painter);
		this.player = new Player(this.painter);
		this.enemy = new Enemy(this.painter);
		this.enemys = [];

		document.addEventListener("keydown", this.checkKeyDown.bind(this), false);
		document.addEventListener("keyup", this.checkKeyUp.bind(this), false);

	}

	damagePerSecond(){
		setInterval(() => {
			this.player.hp -= 1;
			if(enigne.checkCollisionPlayer(this.enemy)){
				this.player.hp -= 30;
			}
		}, 1000);
	}

	run(){
		setInterval(() => {
			this.painter.clearRect(0,0, 1280, 720);
			this.map.draw();
			this.player.draw();
			this.interface.draw();
			this.enemy.draw();
			this.	endGame();
		}, 20);

	}

//Условия победы/проигрыша

	endGame() {
		this.lose();
		this.win();
	}

	lose() {
		if(this.player.hp <= 0){
			alert('Вы проиграли!');
		}
	}
	win() {
		if(this.player.x == 1218){
			alert('Вы выйграли!');
		}
	}


//Служебные функции

	getRandom(min, max){
		return min + Math.floor(Math.random() * (max + 1 - min));
	}

	checkCollisionPlayer(object){
		let xColl, yColl;
		if ((this.player.x + this.player.widht >= object.x) && (this.player.x <= object.x + object.width)){
			xColl = true;
		}
		if ((this.player.y >= object.y) && (this.player.jumpHeight < 60)){
			yColl = true;
		}
		if (xColl && yColl){
			return true;
		}
		return false;
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