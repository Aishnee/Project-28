
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("boy.png");
	mango=loadImage("mango.png");
	stone=loadImage("stone.png");
	tree=loadImage("tree.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,100);
	sling = new String(stone.body,{x:200 , y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  stone.display();
  sling.display();
 
}



