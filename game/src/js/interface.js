class Interface {
	constructor(painter){
		this.painter = painter;
	}

	draw() {
		this.hpBar();
	}

	hpBar() {
		this.painter.fillStyle = "red";
    this.painter.font = 'bold 30px sans-serif';        
		this.painter.fillText("HP:" + enigne.player.hp, 100, 710);
	}
}