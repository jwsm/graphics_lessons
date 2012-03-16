// -----------------------------------------------------
// 3D Bounce World
// Revised: 3/16/11
// Created: 7/24/08
// Author: Jonathan Stuart-Moore (jstuartm@gmail.com)
// A template for the SUCCEED Graphics Workshop
// -----------------------------------------------------

// Parameters
// -----------------------------------------------------
// Modify these to change how the program behaves:

// the size that our window will be
int windowSize = 500;

// what is the maximum speed of a ball?
float speedRange = 5;

// what is the maximum size of a ball?
float sizeRange = 20;

// what is the max. number of balls onscreen?
int maxNumBalls = 50;

// the depth of the floor (if drawing in 3D)
int depth = -600;

//3D or not
boolean use_3d = true;


// Balls
// -----------------------------------------------------
// Create variables to store the balls:

// a temporary ball, for use when creating new balls
Ball a;

// a counter that stores which array position we are updating
int ballCounter = 0;

// the array that stores all the ball objects
Ball[] balls = new Ball[maxNumBalls];


// Setup
// -----------------------------------------------------

// setup()
// this function gets called first when the program is run
void setup()
{
	// setup parameters for our program
	if (use_3d) {
		size(windowSize, windowSize, P3D);
		lights();
	} else {
		size(windowSize, windowSize);
	}

	// fill our background with a dark color
	background(51);

	// set parameters for how our drawing should work
	rectMode(CENTER_RADIUS);
	ellipseMode(CENTER_RADIUS);
	noStroke();
	smooth();
}

// Main Draw Loop
// -----------------------------------------------------

// draw()
// this function is called on every timestep
void draw()
{
	// create a new ball if the mouse is being clicked
	createBallIfMouseClicked();

	// redraw the background (clear out what was drawn
	// on the previous call of draw() ).
	if (use_3d) {
		background(0);
		translate(0, 0, -100);
		drawWalls();
		lights();
		smooth();
		noStroke();
	} else {
		background(51);
	}

	// loop through and update all the balls
	for (int i=0; i<balls.length; i++){
		if (balls[i] != null){
			balls[i].update();
		}
	}
}

// Classes
// -----------------------------------------------------

void createBallIfMouseClicked()
{
	// if the mouse is pressed, create a new ball
	if (mousePressed) {
		// to start with, let's make a new ball here

		/* FILL IN CODE HERE to make a new ball */
		/* store in balls[ballCounter] */

		balls[ballCounter] = new Ball(mouseX,mouseY);
		balls[ballCounter].randomSize(30);
		balls[ballCounter].randomSpeed(10);
		balls[ballCounter].randomColor();

		// Update the counter.
		ballCounter = ballCounter + 1;
		if (ballCounter >= balls.length) ballCounter = 0;
	}
}

class Ball {
	float x, y, z, dx, dy, dz, ballSize, rotation, age;
	color ballColor;

	// Ball()
	// create a new ball with startx and starty as
	// the x,y position of the ball.
	Ball(float startx, float starty) {
		x = startx;
		y = starty;
		z = 0;
		dx = 1;
		dy = 1;
		dz = 1;
		ballSize = 10;
		ballColor = color(255, 255, 255);
		rotation = 0;
		age = 0;
	}

	// setXY(newx, newy)
	// update the position of the ball to be newx, newy
	void setXY(float newx, float newy) {
		x = newx;
		y = newy;
	}

	// randomColor()
	// set a random color for the ball
	void randomColor() {
		ballColor = color(random(0, 255), random(0, 255), random(0, 255));
	}

	// randomSpeed()
	// set a random speed for the ball
	void randomSpeed(float range) {
		dx = random(-range, range);
		dy = random(-range, range);
		dz = random(-range, range);
	}

	// randomSize(range)
	// sets the size of this ball to be random within the range
	// of 2 - range
	void randomSize(float range) {
		ballSize = random(2, range);
	}

	// update()
	// the update function moves the ball, causes it to bounce if it
	// has contacted a wall, and then draws the ball to the screen
	void update() {
		moveBall();
		bounceBall();
		drawBall();
	}

	// moveBall()
	// the following function should change the ball's position
	// based on the speed (direction) it is traveling.
	void moveBall() {

		/* FILL IN CODE AFTER THIS LINE TO MOVE THE BALL */

		x = x+dx;
	    y = y+dy;
	    z = z+dz;
	}

	// bounceBall()
	// the following function should figure out when the ball needs
	// to change direction, and should change its direction accordingly
	void bounceBall() {
		/* FILL IN CODE AFTER THIS LINE TO BOUNCE THE BALL */
		if ((y - ballSize) < 0) {
		   dy = dy * -1;
		}
		if ((y + ballSize) > height) {
		   dy = dy * -1;
		}
		if ((x - ballSize) < 0) {
		   dx = dx * -1;
		}
		if ((x + ballSize) > width) {
		   dx = dx * -1;
		}
		if ((z - ballSize) < 0) {
		   dz = dz * -1;
		}
		if ((z + ballSize) > depth) {
		    dz = dz * -1;
		}
	}

	// drawBall()
	// the following function should draw the ball onto the screen
	void drawBall() {
		age = age + random(20);
		if (age > 5000) return;

		/* FILL IN CODE AFTER THIS LINE TO DRAW THE BALL */

		pushMatrix();
		fill(ballColor);
		if (use_3d) {
			translate(x, y, z);
			sphere(ballSize);
		} else {
			translate(x, y);
			ellipse(0, 0, ballSize, ballSize);
		}
		popMatrix();
	}
}

// Helper Functions
// -----------------------------------------------------

// drawWalls()
// draw wireframe walls around the area where the balls will
// be bouncing
void drawWalls() {
	fill (0, 0, 0, 0);
	int bottom = depth+15;

	stroke (60, 60, 60);
	line (0, 0, 0, 0, 0, bottom);
	line (width, 0, 0, width, 0, bottom);
	line (0, height, 0, 0, height, bottom);
	line (width, height, 0, width, height, bottom);

	beginShape(QUADS);
	vertex(0,0,bottom);
	vertex(width,0,bottom);
	vertex(width,height,bottom);
	vertex(0,height,bottom);
	endShape();

	beginShape(QUADS);
	vertex(0,0,0);
	vertex(width,0,0);
	vertex(width,height,0);
	vertex(0,height,0);
	endShape();
}