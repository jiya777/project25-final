
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rbody1,rbody2,rbody3;
var paper1;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rbody1=new Dustbin(650,630,200,200);


paper1=new paper(100,100,35);
ground1=new ground(300,675,1000,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rbody1.display();

  paper1.display();
  ground1.display();
  

  keypressed();
 
  drawSprites();
 
}


function keypressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-0.5});
		
	}
}
