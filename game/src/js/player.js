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
			this.isJump = false;
			this.direction = "right";
	}

	drawPlayer(){
		this.painter.drawImage(this.img, 19, 0, 24, 30, this.x, this.y, 24*3, 30*3);
		console.log(this.direction);
	}

	move(){
		if(this.isMove || this.isJump){
			switch(this.direction){
				case "right":
					this.x += 10;
					break;
				case "left":
					this.x -= 10;
					break;
				case "down":
					//this.y += 10;
					break;
				case "up":
					if(this.y > 400){
						this.y -= 20;
					}else{
						this.isJump = false;
					}
					break;
				case "up-right":
					this.x += 10;
					if(this.y > 400){
						this.y -= 20;
					}else{
						this.isJump = false;
					}	
					break;
			}
		}
	}

	gravitation() {
		if(this.y < 581 ) {
			this.y += 10;
		}
	}



}