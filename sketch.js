var car;
var wall;
var speed;
var weight;
 var deformation;

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=Math.round(random(200,1300));


  car=createSprite(50, 200, 50, 50);
  wall=createSprite(700,200,50,height/2);
  
  car.velocityX=speed;



}

function draw() {
  background("black");  

  
  

 if(wall.x-car.x < (wall.width+car.width)/2) {
  deformation=2*weight*speed*speed/22509;
 car.velocityX=0


 if(deformation<350 && deformation>150){
  car.shapeColor=color("blue")
}

if(deformation>350){
  car.shapeColor=color("red")

}

if(deformation<150){
  car.shapeColor=color("green");
}




 
}

drawSprites();
}