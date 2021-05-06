
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var redBoxSprite, redBox1Sprite, redBox2Sprite;
var  redbox, redbox1, redbox2; 

function preload()
{
	
}

function setup() {
	createCanvas(1600 ,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	redBoxSprite=createSprite(width/2, 650, 200, 20);
	redBoxSprite.shapeColor= "red";
	redBox1Sprite=createSprite(width/2-100,610, 20, 100);
	redBox1Sprite.shapeColor= "red";
	redBox2Sprite=createSprite(width/2+100, 610, 20, 100);
	redBox2Sprite.shapeColor ="red";
	redbox= Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true});
	redbox1= Bodies.rectangle(width/2-100,610, 20, 100, {isStatic:true});
	redbox2= Bodies.rectangle(width/2+100, 610, 20, 100, {isStatic:true});
	World.add(world, redbox);
	World.add(world, redbox1);
	World.add(world,redbox2);

	paper = new Paper( 100, 200, 30);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();

  drawSprites();
 
}

function keyPressed(){
	if ( keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:120 , y:-100})
}
}



