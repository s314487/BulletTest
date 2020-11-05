var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car = createSprite(50,200,10,10) 
  wall = createSprite(1200,200, thickness, height/2)
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
}

function draw() {
  background(255,255,255);
  car.velocityX = speed 
  wall.shapeColor = color(80,80,80)
  
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge = lbullet.x+lbullet.width
wallLeftEdge = lwall.x
if (bulletRightEdge>=wallLeftEdge){
return true

}
return false
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness)
}



if (damage>10){
wall.shapeColor = color(255,0,0)
}
if (damage<10){
wall.shapeColor = color(0,255,0)

}
}
