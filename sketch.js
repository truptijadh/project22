
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_option = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		
	}	


	//Create the Bodies Here.
	
	ground =new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(900,600,20,120);

	ball = Bodies.circle(100,200,20,ball_option);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);


  
  ground.display();
  leftSide.display();
  rightSide.display();
  

  Engine.update(engine);
 
 
  
}

function keyPressed() {
	if (keycode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:600,y:500}, {x:3,y:3.5});
	}
}


