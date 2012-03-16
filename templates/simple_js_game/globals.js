/* --------------------------------------- */
/* Images */

     //Example:
     //var avatarImage = new Image();
     //avatarImage.src = "./images/avatar.png";

     /* DEFINE IMAGES HERE */

/* --------------------------------------- */
/* Colors */

// Game Background Color
var bgcolor = 'white';

// Message Color
var messageColor = 'black';
var messageFont = '15pt Helvetica';

// Scoreboard Text Color
var scoreboardColor = 'black';
var scoreboardFont = '20pt Helvetica';

/* --------------------------------------- */
/* Items In Play */

var numBaddies = 5;
var numGoodies = 5;
var goodiesLeft = 0;

var goodieMessages = ['nice!'];
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