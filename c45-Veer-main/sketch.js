var canvas;
var backgroundImage, bgImg, kite1_img, kite2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, kite1, kite2;
var kites = [];

function preload() {
  kite1_img = loadImage("../assets/kite.png");
  kite2_img = loadImage("../assets/inverted kite.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("blue");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
