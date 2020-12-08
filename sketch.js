var bullet,wall;
var thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
speed=random(223,321);
weight=random(30,52)
thickness=random(22,83);

bullet=createSprite(50,200,50,10);
bullet.shapeColor="white";

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
  background("indigo"); 

  bullet.velocityX=speed;

  if (collide(wall,bullet)){
  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage<10){
    wall.shapeColor="green";
    textSize(30);
    fill("white");
    text("Effective",800,200);
  }

  if (damage>10){
    wall.shapeColor="red";
    textSize(30);
    fill("white");
    text("Not Effective",800,200);
  }

  }
    
  drawSprites();
}

function collide(object1,object2){

if (object1.x - object2.x < object1.width + object2.width/2){
return true;
}
else {
return false;
}



}