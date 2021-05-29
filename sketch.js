
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paper1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,650);
     paper1=new Paper(100,600,10)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  
  groundObject.display();
  dustbinObj.display();
  paper1.display();

   
drawSprites()
}

 function keyPressed(){
 
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.bodies,paper1.bodies.position,{x:130,y:-145});
 
}
 }
  
