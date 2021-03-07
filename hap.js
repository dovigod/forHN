let app;

let displacementSprite;
let displacementFilter;
function initPixi() {
	app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
	document.body.appendChild(app.view);
	let image = new PIXI.Sprite.from('heeni.jpeg');
	image.width = window.innerWidth;
	image.height = window.innerHeight;
	app.stage.addChild(image);

	displacementSprite = new PIXI.Sprite.from('raindrops.jpg');
	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	app.stage.addChild(displacementSprite);
	app.stage.filters = [displacementFilter];
	app.renderer.view.style.transform = 'scale(1.02)';
	displacementSprite.scale.x = 20;
	displacementSprite.scale.y = 20;
	animate();

	image.interactive = true;
	image.on('pointerdown', handler);
}
function animate() {
	displacementSprite.x += 10;
	displacementSprite.y += 4;
	requestAnimationFrame(animate);
}
initPixi();

function handler(event) {
	const audio = new Audio('chime_rain.flac');
	audio.play();
}
/*
const htm = document.querySelector('html');
htm.addEventListener('click', handler);
*/
