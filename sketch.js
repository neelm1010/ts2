const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var slingShot, block8,block9,block10,block11,block12,block13,block14,block15,block16,ground,polygon
var launchingForce=100
var score=0
function preload() {
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  image(img, 0, 0);
  tint(255, 126); 
  image(img, 50, 0);
  ground=new Ground(400,255,800,20)
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
  block16=new Box(390,155,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot=new SlingShot(this.polygon,{x:100,y:100})
  //ground.isStatic=false;


}

function draw() {
  background(255,255,255);
  text("Score:"+score,750,40)
  ground.display();  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  slingShot.display();
  imageMode(CENTER) 
  image(img ,polygon.position.x,polygon.position.y,40,40);
  
  drawSprites();
}
function mouseDragged() 
{ 
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
  slingShot.attach(this.polygon);
  }
  
  }
 