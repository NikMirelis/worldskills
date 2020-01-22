class Player{
	constructor(painter, hp, view, name){
			this.x = 0;
			this.y = 581;
			this.hp = hp;
			this.view = view ;
			this.name = name;
			this.painter = painter;
			this.img  = new Image();
			this.img.src = "images/players/timon.png";
			this.isMove = false;
			this.direction = "right";
	}

	drawPlayer(){
		this.painter.drawImage(this.img, 19, 0, 24, 30, this.x, this.y, 24*3, 30*3);
		console.log(this.direction);
	}

	move(){
		if(this.isMove){
			console.log("Move true");
			switch(this.direction){
				case "right":
					this.x += 10;
					console.log(this.direction);
					break;
				case "left":
					this.x -=10;
					console.log(this.direction);
					break;
			}
		}
	}


}