//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  //load all images
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //create canvas
  createCanvas(400,400);
  
  //creating monkey, add velocity and animation
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkry", monkey_running);
  monkey.scale=0.1;
  
  //creating ground, add velocity and animation
  ground=createSprite(400,350,900,10);
  ground.velocityX=-6;
  ground.X=ground.width/2;
  
  //create groups
  foodGroup = new Group();
  obstaclesGroup=new Group();
  
  //survival time
  var survivalTime =0;
  score=0;
}


function draw() {
  //background
  background("white");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  //if key is pressed , monkey jumps
  if(keyDown("space") && monkey.y >= 300) {
       monkey.velocityY = -12;
    }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //make monkey collide with ground
  monkey.collide(ground);
  
  //survival time
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  //spawn food and obstacles
  spawnFood();
  spawnObstacles();
 
  drawSprites();
 
}

function spawnFood(){
  //create banana every 80 frames
  if(frameCount % 80===0){
  var banana = createSprite(390, random(200, 250),60,10);
  banana.addImage(bananaImage);
  banana.scale = 0.08;
  banana.velocityX = -6;
  banana.lifetime = 100;
  foodGroup.add(banana);
  }
}

function spawnObstacles(){
  //create obstacles every 300 frames
  if(frameCount % 300===0){
  var obstacle = createSprite(390, 310,60,10); 
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -6;
  obstacle.lifetime = 100;
  obstaclesGroup.add(obstacle);
  }
}





