// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;
// position and radius of player
var x = 300;
var y = 300;
var s = 50;
// Player speed in x-y directions
var mx = 0;
var my = 0;

// Positions, size and collision check of circle
var CX;
var CY;
var CS = 50;
var CC = false;

//Variable for the score
var SCORE = 0;

// Import images onto canvas
function drawPewd(){
    var PEWD = new Image();
    PEWD.src = "https://cdn.worldvectorlogo.com/logos/pewdiepie.svg";
    ctx.drawImage(PEWD, x,y,s,s);
}
function drawSub(){
    var Sub = new Image();
    Sub.src = "https://downloadpng.com/wp-content/uploads/thenext-thumb-cache//subscribe-png-button-403400800acea5e0ff1fb282c2b8c3cb-300x300.png";
    ctx.drawImage(Sub, CX,CY,CS,CS);
}
// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Put circle in random position
	CX = Math.floor(Math.random() * (WIDTH - CS))
    CY = Math.floor(Math.random() * (WIDTH - CS))

	// Wait for user to press keyboard 
    window.onKeydown = keydownControl;

	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

// Repeated draw function
function draw() {

	clear();
	//draw images
    drawPewd();
    drawSub();
	// Make player bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	} else if (y + my > WIDTH - s || y + my < 0) {
		my = -my;
	}

	// Moves our player
	x += mx;  
	y += my;

	// Check for collisions
	collisionCheck();
	collisionHandle();

}

//Function to check for collisions
function collisionCheck(){

}

//Function to handle the collision
function collisionHandle(){
    if (CC) {
    	CX = Math.floor(Math.random() * (WIDTH - CS));
    	CY = Math.floor(Math.random() * (HEIGHT - CS));
    	SCORE += 1
    	document.getElementById("SCORE").innerHTML = SCORE;
    }
}
//Function to handle the keypresses
function keydownControl(e){
    if (e.keyCode == 37) {
    	mx = -4
    	my = 0
    }

    if (e.keyCode == 38) {
    	mx = 0
    	my = 4
    }

    if (e.keyCode == 39) {
    	mx = 4
    	my = 0
    }

    if (e.keyCode == 40) {
    	mx = 0
    	my = -4
    }
}

init();