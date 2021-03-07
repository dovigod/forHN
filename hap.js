let app;

let displacementSprite;
let displacementFilter;

function initPixi() {
	app = new PIXI.Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0xbce8b1
	});

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
	//image.on('click', clickHandler);
}
/*
const clickHandler = (e) => {
	const eSprite = new PIXI.Sprite.from('waterdrops2.jpg');
	const eFilter = new PIXI.filters.DisplacementFilter(eSprite);
	app.stage.addChild(displacementSprite);
	app.stage.filters.push(eFilter);
	eFilter.scale.x = 1;
	eFilter.scale.y = 1;
};
*/
function animate() {
	displacementSprite.x += 10;
	displacementSprite.y += 4;
	requestAnimationFrame(animate);
}
initPixi();

function handler(event) {
	const audio = new Audio('chime_rain.flac');
	if (!audio.play()) {
		audio.play();
	} else {
		audio.pause();
	}
}

const cnx = document.querySelector('canvas');

cnx.style.zIndex = -3; /*
const htm = document.querySelector('html');
htm.addEventListener('click', handler);
*/
