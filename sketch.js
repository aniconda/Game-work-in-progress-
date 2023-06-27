var canvas;
var backgroundImage, runner1_img, runner2_img, track;
var speedBoostlImage, powerCoinImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, runner1, runner2, speedBoost, powerCoins, obstacles;
var runners = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  Runner1Animation = loadAnimation("./assets/Runner1_1.png", "./assets/Runner1_2.png", "./assets/Runner1_3.png", "./assets/Runner1_4.png", "./assets/Runner1_5.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
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
