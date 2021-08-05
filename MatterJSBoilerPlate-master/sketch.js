var paper;
var rect,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
  ground = new Roof(400,680,800,15)
  trash1 = new Roof(500,640,5,70)
  trash2 = new Roof(525,670,50,5)
  trash3 = new Roof(550,640,5,70)
  paper = new Bob(150,670,20,20)
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
 trash1.display()
  trash2.display()
  trash3.display()
  paper.display()
  drawSprites();
 
}


function keyPressed() {

	if(keyCode=== UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5})
	}
}
