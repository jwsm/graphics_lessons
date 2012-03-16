/* --------------------------------------- */
/* Functions */

// Create a new level
var newLevel = function() {
	// clear out all existing sprites
	gameSprites.clear();
	// reset the number of goodies that we need to collect
	// in order to complete the level.
	goodiesLeft = numGoodies;
	// compute the number of baddies as the base number (numBaddies)
	// plus the level number
	gameSprites.addMultiple((numBaddies + game.level), "Baddie");
	// add the same number of goodies (numGoodies) each level
	gameSprites.addMultiple(numGoodies, "Goodie");
}

// Perform tasks each time the game loop runs
var gameLoop = function() {

	/* ADD CODE HERE THAT RUNS EACH TIME GAME LOOP RUNS */

}

/* --------------------------------------- */
/* Mouse/Keyboard input */

// Process Mouse Movement
document.onmousemove = function(e){
	avatar.followMouse(e);
}

// Process Key Commands
document.onkeydown = function(e) {
	switch (e.keyCode) {}
}

/* --------------------------------------- */
/* Start the Game */

// Create First Level
newLevel();
// Start game loop
mainLoop();