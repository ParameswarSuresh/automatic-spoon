var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, wall, wall2, wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	 var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
   

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);

	
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	rectMode(CENTER);
 	World.add(world, ground);

	wall = new Wall(width/2, 648);
	wall2 = new Walls(500, 609);
	wall3 = new Wallz(298, 609);
}

function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  wall.display(); 
  wall2.display();
  wall3.display();
  keyPressed();
  drawSprites();
  
}
function keyPressed(){
if (keyCode === DOWN_ARROW){
	Engine.update(engine);
}
}



