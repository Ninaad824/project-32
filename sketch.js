const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
  ground1 = new Ground(400,390,800,20);
  box1 = new Box(420,340,30,30)
  box2 = new Box(450,340,30,30)
  box3 = new Box(480,340,30,30)
  box4 = new Box(510,340,30,30)
  box5 = new Box(435,340,30,30)
  box6 = new Box(465,320,30,30)
  box7 = new Box(495,320,30,30)
  box8 = new Box(480,320,30,30)
  box9 = new Box(450,320,30,30)
  box10 = new Box(465,320,30,30)

  ball = Bodies.circle(100,200,20)
  World.add(world,ball)
  sling = new SlingShot(ball,{x:100,y:200})
  
  
}

function draw() {
  background("grey");
  Engine.update(engine);
  ground1.display();  
  box1.display();
  box2.display()
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ellipse(ball.position.x,ball.position.y,50,50)
  sling.display();

  text("score :" +score,50,50)
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();

  
}
function mouseDragged()
{
	Matter.Body.setPosition(ball, {x:mouseX, y:mouseY}) 
}
function mouseReleased(){
  sling.fly()
}
function keyPressed(){
  if(keyCode === 32){
    sling.attach(ball);
  }
}
