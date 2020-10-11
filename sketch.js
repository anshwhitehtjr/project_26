
var rope1,rope2,rope3,rope4,rope5,roof;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;

const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var pendulumDiameter = 100;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof = new Roof(400,50,600,40);

	pendulum1 = new Bob(200,600,100/2);
	pendulum2 = new Bob(300,600,100/2);
	pendulum3 = new Bob(400,600,100/2);
	pendulum4 = new Bob(500,600,100/2);
	pendulum5 = new Bob(600,600,100/2);

	rope1=new Rope(pendulum1.body,roof.body,-pendulumDiameter*2, 0);
	rope2=new Rope(pendulum2.body,roof.body,-pendulumDiameter*1, 0);
	rope3=new Rope(pendulum3.body,roof.body,pendulumDiameter*0, 0);
	rope4=new Rope(pendulum4.body,roof.body,pendulumDiameter*1, 0);
	rope5=new Rope(pendulum5.body,roof.body,pendulumDiameter*2, 0);

}


function draw() {
  background(255);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   
	   Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x : 35,y : 35});
	   
	 }
   }

