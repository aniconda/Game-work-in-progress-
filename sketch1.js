var Runner1Animation, track, runner1;


function preload() {
    Runner1Animation = loadAnimation("./assets/Runner1_1.png", "./assets/Runner1_2.png", "./assets/Runner1_3.png", "./assets/Runner1_4.png", "./assets/Runner1_5.png");
    track = loadImage("./assets/track.jpg");
  }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    runner1 = createSprite(width / 2 + 100, height - 100);
    runner1.addAnimation("Runner1", runner1);
    runner1.scale = 0.8;
}
function draw() {
    background("white");
    runner1.velocityY += 5;
    
    drawSprites();
}