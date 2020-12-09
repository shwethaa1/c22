//name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box;
var engine,world;
var ball;
function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  var box_options={
    isStatic :true
  }
box = Bodies.rectangle(200,380,400,20,box_options);
var ball_options = {  
  restitution : 1
}
ball = Bodies.circle (300,100,20, ball_options)


World.add(world,ball);
World.add(world,box);
console.log(box);
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER) ;
rect(200,200,50,50);
rect(box.position.x,box.position.y,400,20);
ellipseMode(RADIUS);

ellipse(ball.position.x,ball.position.y,20,20);

}