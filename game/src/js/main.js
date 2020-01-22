let game = new Game();
game.run();

document.addEventListener("keydown", printKey.bind(this), false);

function printKey(e){
	console.log(String.fromCharCode(e.keycode || e.which));
}

