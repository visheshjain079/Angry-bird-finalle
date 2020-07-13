
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World  = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var box,box1,box2,box3,box4;
var ground;
var pig,pig1;
var bird;
var log,log1,log2,log3,log4;
var platform;
var slingshot;
var backGroundImage;
var gameState = "onSling";
var bg="Sprites/bg.png";
var score = 0



function preload(){

getTime();

}

function setup() {
 
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  

  

  box = new Box(700,320,70,70);
  ground = new Ground(600,390,1200,20);
  platform = new Ground(150,305,300,170);
  box1 = new Box(920,320,70,70);
  pig = new Pig(810,350,50,50);
  bird = new Bird(200,50,50,50);
  log = new Log(810,260,300,PI/2);
  box2 = new Box(700,240,70,70);
  box3 = new Box(920,240,70,70);
  pig1 = new Pig(810,220,50,50);
  log1 = new Log(810,180,300,PI/2);
  log2 = new Log(760,120,150,PI/7);
  log3 = new Log(870,120,150,-PI/7);
  box4 = new Box(810,160,70,70);
 
  slingshot = new Slingshot(bird.body,{x:200,y:50})




}



function draw() {
  if(backGroundImage)
  background(backGroundImage);

  noStroke();
  textSize(35);
  fill("white");
  text("Score : " + score,900,51);
    

  Engine.update(engine);
 
  box.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  pig.display();
  pig.score();
  pig1.display();
  pig1.score();
  bird.display();
  log.display();
  log1.display();
  log2.display();
  log3.display();
  box4.display();
  platform.display();	

 slingshot.display();

 
 
  
}

function mouseDragged(){

Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
 slingshot.fly();
gameState="launched";
}

function keyPressed(){
if(keyCode===32){
  bird.trijectory=[];
  Matter.Body.setPosition(bird.body,{x:200,y:50});
  slingshot.attach(bird.body);
}


}

async function getTime(){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var jsonResponse = await response.json();
var dateTime = jsonResponse.datetime;
var hour = dateTime.slice(11,13);
if(hour>=06 && hour<=19){
bg="Sprites/bg.png"
}else{
  bg="Sprites/bg2.jpg"
}
backGroundImage=loadImage(bg);


console.log(hour);






}