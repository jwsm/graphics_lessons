/* --------------------------------------- */
/* 	MySprite
	Common to all sprites in this game */
MySprite.prototype = new Sprite;
function MySprite() {
	this.update = function() {
		this.move();
		this.toroidWrap();
		this.checkHitAvatar();
	}
}

/* --------------------------------------- */
/* 	Avatar
	The sprite controlled by the user */

	/* FILL IN CODE TO DEFINE AVATAR */

/* --------------------------------------- */
/* 	Other Sprites  */

	/* FILL IN CODE TO DEFINE OTHER SPRITES */