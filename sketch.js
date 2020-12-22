
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("gray");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 stoneObj =new stone(235,420,30);

	 mangoFruit = new mango(this.x,this.y,this.r);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  groundSprite.display();
  mangoFruit.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}
 
function keyPressed(){
	if (keyCode === 32){
	   Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	   launcherObject.attach(stoneObj.body);
	}
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r,lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}