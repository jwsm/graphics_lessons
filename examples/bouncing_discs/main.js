/* --------------------------------------- */
/* Functions */

// Create a new level
var newLevel = function() {
}

// Perform tasks each time the game loop runs
var gameLoop = function() {
	// if there is a disc currently being drawn
	// (i.e., the mouse is being held down)
	if (newest_disc != null) {
		// center the disc around the the mouse
		newest_disc.x = last_mouse_x;
		newest_disc.y = last_mouse_y;
		// change the size of the disc based on how
		// long the mouse has been held down (difference
		// between starting time and now).
		newest_disc.size =
			(new Date().getTime() - start_mouse_time)/10;
	}
}

/* --------------------------------------- */
/* Mouse/Keyboard input */

// start position of mouse (when clicked down)
var start_mouse_x = 0;
var start_mouse_y = 0;
// latest position of mouse (while held down)
var last_mouse_x = 0;
var last_mouse_y = 0;
// starting time (when clicked down)
var start_mouse_time = 0;
// the disc currently being drawn
var newest_disc = null;

// Process Mouse Click (down)
document.onmousedown = function(e){
	// create a new disc and add it to the game
	newest_disc = new Disc();
	gameSprites.addItem(newest_disc);
	// set the x, y position of the disc to the mouse
	newest_disc.x = getMouseX(e);
	newest_disc.y = getMouseY(e);
	// randomize the color of the disc
	newest_disc.color = randColor();
	// store the starting (same as the most recent)
	// position of the mouse
	start_mouse_x = last_mouse_x = getMouseX(e);
	start_mouse_y = last_mouse_y = getMouseY(e);
	// record the time when we started to draw the disc
	start_mouse_time = new Date().getTime();
}

// Process Mouse Movement
document.onmousemove = function(e) {
	// each time the mouse is moved, store its most
	// recent position (for use in gameLoop())
	last_mouse_x = getMouseX(e);
	last_mouse_y = getMouseY(e);
}

// Process Mouse Click Release
document.onmouseup = function(e){
	// make sure we are still drawing a disc
	if (newest_disc != null) {
		// set the momentum of the disc based on how fast
		// the mouse was dragged (in x and y directions)
		// since we started drawing a disc.
		newest_disc.dx = (getMouseX(e) - start_mouse_x)/6;
		newest_disc.dy = (getMouseY(e) - start_mouse_y)/6;
		// set the newest_disc to null (signal that we are)
		// no longer in the process of drawing a disc
		newest_disc = null;
		// increment the score counter so that we can see
		// how many discs we have drawn so far
		game.addScore(1);
	}
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