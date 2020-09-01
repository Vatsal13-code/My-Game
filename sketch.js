var bananaImage, obstacleImage, obstacleGroup,  score,player,playerImage,banana,bananaGroup,obstacle, stone,ground;
function preload () {
  playerImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(600, 400);

  player = createSprite(30,350,20,20);
  player.addAnimation("runningPlayer",playerImage)
  ground=createSprite(200,385,600,10)
  score = 0;
  bananaGroup = createGroup();
  obstacleGroup=createGroup();
  player.scale=0.1
} 

function draw() {
    background(220);
  player.collide(ground)
  if(keyDown("space")) {
  player.velocityY = -15
  }
  player.velocityY=player.velocityY+0.8;
  if(player.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
    score=score+2
  }
  if(player.isTouching(obstacleGroup)) {
   player.scale =  0.05 ;
  }
switch(score) {
  case 10: player.scale = 0.15;
        break
  case 20: player.scale = 0.2;
        break;
  case 30: player.scale=0.25;
        break;
  case 40: player.scale = 0.3;
        break
  default:break

}
    stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 300,50)
    drawSprites();
    food();
    rock();
}



function food() {
  if(frameCount % 80 == 0) {
    banana = createSprite(400, random(200,325),20,20)
    banana.addImage("banana",bananaImage)
    bananaGroup.add(banana)
    banana.velocityX = -7
    banana.scale=0.05
  }
}
function rock() {
 if(frameCount%100==0) {
  stone = createSprite(400,350,20,20)
  stone.addAnimation("rock",obstacleImage)
  stone.velocityX = -7
   stone.scale=0.15
  obstacleGroup.add(stone)
 }
}