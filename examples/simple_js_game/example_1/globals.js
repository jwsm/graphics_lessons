/* --------------------------------------- */
/* Images */

var avatarImage = new Image();
avatarImage.src = "avatar.png";

var baddieImage = new Image();
baddieImage.src = "baddie.png";

/* --------------------------------------- */
/* Colors */

// Game Background Color
var bgcolor = 'black';

// Message Color
var messageColor = 'white';
var messageFont = '15pt Cracked';

// Scoreboard Text Color
var scoreboardColor = 'white';
var scoreboardFont = '20pt Cracked';

/* --------------------------------------- */
/* Items In Play */

var numBaddies = 5;
var numGoodies = 5;
var goodiesLeft = 0;

var goodieMessages = ['nice!', 'cool', 'good going', 'you rock'];
var baddieMessages = ['you died'];

/* --------------------------------------- */
/* Lives & Levels */

var lives = 2;
var levels = 5;

/* --------------------------------------- */
/* Speeds */

// How Fast Object Follows the Mouse
var mouseFollowSpeed = 0.01;

// How Fast Keys Accelerate object
var keyAccelSpeed = 0.5;

// Delay between modes
var delayBetweenModes = 1500;

/* --------------------------------------- */
/* Random Sprite Size & Speed */

var randMaxSize = 30;
var randMaxDx = 3;
var randMaxDy = 3;