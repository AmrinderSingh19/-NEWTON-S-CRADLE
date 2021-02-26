
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine=Engion.create();
	world=engine.world;

	roof=new Roof(350,100,300,30);
	world.add(world,roof);

	bobObject1 = new(250,300);
	bobObject1 = new(300,300);
	bobObject1 = new(350,300);
	bobObject1 = new(400,300);
	bobObject1 = new(450,300);

	rope1=new Rope(bobObject1.body,rof.body,-100,0);
	world.add(world,rope1);

	rope2=new Rope(bobObject2.body,rof.body,-50,0);
	world.add(world,rope2);

	rope3=new Rope(bobObject3.body,rof.body,0,0);
	world.add(world,rope3);

	rope4=new Rope(bobObject4.body,rof.body,+50,0);
	world.add(world,rope4);

	rope5=new Rope(bobObject5.body,rof.body,+100,0);
	world.add(world,rope5);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

	background("white");
	Engine.update(engine);

	roof.display();

	bobObject1.display
	bobObject2.display
	bobObject3.display
	bobObject4.display
	bobObject5.display

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  function keypressed(){
	  if(keyCode===UP_ARROW){
		  matter.body.applyforc(bobObject3.body,bobObject3.body.position,{x:-730,y:0});
		  
	  }
  }
 
}



