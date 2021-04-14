
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{	
}

function setup() {
	createCanvas(900, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundomega = new Ground(450,500,800,20);
    ground1 = new Ground(500,475,20,30)
    ground2 = new Ground(800,475,20,30)
    ground3 = new Ground(650,460,400,20)
  //  ground4 = new Ground(830,440,10,20)
  //  ground5 = new Ground(460,440,10,20)    
    
    box1=new Box(500,430,40,40)
    box2=new Box(530,430,40,40)
    box3=new Box(570,430,40,40)
    box4=new Box(610,430,40,40)
    box5=new Box(650,430,40,40)
    box6=new Box(690,430,40,40)
    box7=new Box(730,430,40,40)
    box8=new Box(770,430,40,40)
    box9=new Box(810,430,40,40)
    
    box10=new Box(510,390,40,40)
    box11=new Box(550,390,40,40)
    box12=new Box(590,390,40,40)
    box13=new Box(630,390,40,40)
    box14=new Box(670,390,40,40)
    box15=new Box(710,390,40,40)
    box16=new Box(750,390,40,40)
	box17=new Box(790,390,40,40)

    box18=new Box(530,350,40,40)    
    box19=new Box(570,350,40,40)
    box20=new Box(610,350,40,40)
    box21=new Box(650,350,40,40)
    box22=new Box(690,350,40,40)
    box23=new Box(730,350,40,40)
    box24=new Box(770,350,40,40)

    box25=new Box(550,310,40,40)
    box26=new Box(590,310,40,40)
    box27=new Box(630,310,40,40)
    box28=new Box(670,310,40,40)
    box29=new Box(710,310,40,40)
    box30=new Box(750,310,40,40)
  
    box31=new Box(570,270,40,40)
    box32=new Box(610,270,40,40)
    box33=new Box(650,270,40,40)
    box34=new Box(690,270,40,40)
    box35=new Box(730,270,40,40)
   
    box36=new Box(590,230,40,40)
    box37=new Box(630,230,40,40)
    box38=new Box(670,230,40,40)
    box39=new Box(710,230,40,40)

    box40=new Box(610,190,40,40)
    box41=new Box(650,190,40,40)
    box42=new Box(690,190,40,40)

    box43=new Box(630,150,40,40)
    box44=new Box(670,150,40,40)

    box45=new Box(650,110,40,40)

    poly=new Polygon(300,300,50,50)

    sling1=new SlingShot(poly.body,{x:100,y:260})

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  groundomega.display();
  ground1.display();
  ground2.display();
  ground3.display();
  
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
 
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
 
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display(); 
  box34.display();
  box35.display();
 
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  box40.display();
  box41.display();
  box42.display();

  box43.display();
  box44.display();

  box45.display();

  poly.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly()
}