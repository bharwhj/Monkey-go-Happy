var invisibleGround
var bananaImage
var obstacleImage,obstacleGroups
var background2,jungle
var score
var player
var foodGroup
var banana
var rocks

function preload() {
 background2=loadImage("jungle.jpg")
 player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacle_img= loadImage("stone.png");
}

function setup() 
{
  createCanvas(400, 400);
jungle = createSprite()
jungle.addImage("back",background2)
jungle.scale=1.1
jungle.velocityX=-4
jungle.x=jungle.width/2
  
   player =createSprite(50,250);
  player.addAnimation("monkeyrun",player_running)
  player.scale=0.3

  foodGroup=new Group()
  obstacleGroup=new Group()

  invisibleGround = createSprite(50,250,400,10);
  invisibleGround.visible = false;
  
  score=0
}



function draw() {
  background(220);
      if(keyDown("space") && player.y>100) {
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.8
  
    
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
    player.collide(invisibleGround)
  
  if (foodGroup.isTouching(player)){
      score=score+2
  
    
  }
  
  if (obstacleGroup.isTouching(player)){
    player.scale=0.2
    
    
    
    
    
  }
  
  
  
  
    spawnobstacles()
    spawnbanana();
 
  drawSprites();
  stroke("white");
  textSize("20")
  fill("white")
  text("Score:"+score,250,70)
}


function spawnbanana()
{
  if (World.frameCount % 80 === 0) 
  {
     banana = createSprite(400,100 );
     banana.x= Math.round(random(300,400));
    banana.addImage(bananaImage);
    banana.scale=0.13;
    banana.velocityX=-9;
  foodGroup.add(banana);
  foodGroup.setLifetimeEach(100);
  banana.visible=true
  switch(score)
  {
    case 10: player.scale=0.4
      break;
      case 20:player.scale=0.41
      break;
      case 30:player.scale=0.42
      break;
      case 40: player.scale=0.43
      break;
      default: break;
  }
    
}
  
}

function spawnobstacles()
{
  if (World.frameCount % 100 === 0) {
  var rocks =createSprite(200,200);
    rocks.addImage("Stone",obstacle_img);
   rocks.x= Math.round(random(300,400));
    rocks.scale=0.2;
    rocks.velocityX = -3;
    obstacleGroup.add(rocks);
    obstacleGroup.setLifetimeEach(100);
  rocks.visible=true;

  }
  
  
  
}




















