const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,stand1,stand2,ground;
var sling;
var polygonimg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19;
var score = 0;

function preload() {
  polygonimg = loadImage("download.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Stand(450, 390, 900, 20);
  stand1 = new Stand(390, 300, 250, 10);
block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
 block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
 block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
block16 = new Block(390, 155, 30, 40);
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);
sling = new Slingshot( ball, { x: 100, y: 200 });
}
function draw() {
  background("white")
  Engine.update(engine);
  text("SCORE : " +score,600,70)
  strokeWeight(2);
  stroke(15);
  imageMode(CENTER);
  image(polygonimg, ball.position.x, ball.position.y, 40, 40);
  ground.display();
  stand1.display();
sling.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
block8.display();
  block9.display();
  block11.display();
  block12.display();
block10.display();
block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
 
drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){

      sling.attach(ball)
  }
  
}