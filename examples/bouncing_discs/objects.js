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

Avatar.prototype = new MySprite;
function Avatar() {
}

/* --------------------------------------- */
/* 	Other Sprites  */

Disc.prototype = new MySprite;
function Disc() {
	// age stores how many bounces the disc has made
	this.age = 0;
	// update the disc by adding gravity, moving it,
	// and checking to see if it should bounce.
	this.update = function() {
		this.gravity();
		this.move();
		this.bounce();
	}
	// didBounce() is called when the disc does bounce.
	// increment the age counter; if it reaches some
	// maximum number (here 6), the disc explodes.
	this.didBounce = function() {
		this.age++;
		if (this.age > 6) {
			this.explode();
		}
	}
	// add gravity to the disc -- add a small amount to dy
	// each time it moves.
	this.gravity = function() {
		this.dy += 0.1;
	}
}