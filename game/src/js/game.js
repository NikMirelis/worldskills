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

		this.bgMove = true;
		this.topX = 1280;
		this.topY = 0;
		this.x = 0;
		this.y = 0;
	}

	damagePerSecond(){
		setInterval(() => {
				this.attackPerSecond();
		}, 1000);
	}

	run(){
		setInterval(() => {
			this.painter.clearRect(0,0, 1280, 720);
			this.drawBackground();
			this.player.movePlayer();
			this.stopPlayer();
			this.enemy.drawEnemy();
			this.endGame();
			this.attack();
			this.endGame();
			this.drawHP();
		}, 20);

	}

	checkCollisionPlayer(object){
		let xColl, yColl;
		if ((this.player.x + this.player.widht >= object.x) && (this.player.x <= object.x + object.width)){
			xColl = true;
		}
		if ((this.player.playerY >= object.y) && (this.player.jumpHeight < 60)){
			yColl = true;
		}
		if (xColl && yColl){
			return true;
		}
		return false;
	}

	stopPlayer() {
		if(this.player.x >= ((this.painter.canvas.width-this.player.widht)/2)) {
			this.player.x -= 7;
			this.scrollBg();
		}
		if(!this.bgMove){
			this.player.x +=7;
		}
	}

	scrollBg(){
			this.x -= 7;
			this.bgMove = true;
			if(this.x <= -1280){
				this.x += 7;
				this.bgMove = false;
			}
	}

	attackPerSecond(){
		this.player.hp -= 1;
		if(game.checkCollisionPlayer(this.enemy)){
		this.player.hp -= 30;
		}
	}

	attack(){
		if(game.checkCollisionPlayer(this.enemy) && !this.player.collEnemy){
			this.player.collEnemy = true;
			this.player.hp -= 30;
		}
		if(game.checkCollisionPlayer(this.enemy) == false){
			this.player.collEnemy = false;
		}
	}

	drawHP() {
		this.painter.fillStyle = "red";
    this.painter.font = 'bold 30px sans-serif';        
		this.painter.fillText("HP:" + this.player.hp, 100, 710);
	}

	endGame() {
		if(this.player.hp <= 0){
			alert('Вы проиграли!');
		}
		if(this.player.x == 1218){
			alert('Вы выйграли!');
		}
	}

	drawBackground(){
		this.painter.drawImage(this.bg, this.x, this.y, 2560, 720);
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