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

Avatar.prototype=new MySprite;
function Avatar() {
	this.x = width/2;
	this.y = height/2;
	this.size = 30;
	this.color = 'orange';
	this.isAvatar = true;
	this.image = avatarImage;
}

/* --------------------------------------- */
/* 	Other Sprites  */

/* Bad guy */
Baddie.prototype=new MySprite;
function Baddie() {
	this.randomize();
	this.color = 'red';
	this.image = baddieImage;
	// when it hits the avatar, the avatar explodes
	this.hitAvatar = function() {
		avatar.explode();
		game.die();
		messages.addMessage("you die", avatar);
	}
}

/* Goodies that you pick up to win the level */
Goodie.prototype=new MySprite;
function Goodie() {
	this.randomize();
	this.color = 'green';
	// when a goodie hits the avatar, the goodie explodes
	// and your score increases by 200 points. Also you check
	// to see if the level (or game) is over based on goodiesLeft.
	this.hitAvatar = function() {
		this.explode();
		game.addScore(200);
		messages.addMessage(randElement(goodieMessages), this);
		goodiesLeft -= 1;
		if (goodiesLeft == 0) {
			game.winLevel();
		}
	}
}