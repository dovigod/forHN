var app;

var displacementSprite;
var displacementFilter;
function initPixi() {
	app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
	console.dir(PIXI);
	document.body.appendChild(app.view);
	var image = new PIXI.Sprite.from('heeni.jpeg');
	image.width = window.innerWidth;
	image.height = window.innerHeight;
	app.stage.addChild(image);

	displacementSprite = new PIXI.Sprite.from('clouds.jpg');
	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	app.stage.addChild(displacementSprite);
	app.stage.filters = [displacementFilter];
	app.renderer.view.style.transform = 'scale(1.02)';
	displacementSprite.scale.x = 6;
	displacementSprite.scale.y = 6;
	animate();
}
function animate() {
	displacementSprite.x += 10;
	displacementSprite.y += 4;
	requestAnimationFrame(animate);
}
initPixi();
