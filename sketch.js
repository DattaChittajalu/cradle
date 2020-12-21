const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var ground;

function setup() {
  createCanvas(1200,600);
  engine= Engine.create();
  world= engine.world;

  var ball_options= {
    isStatic : true
  }

  ground = Bodies.rectangle(600,580,1200,10,ball_options);
  World.add(world,ground)
  console.log(ground)

  

  ball= new Ball(200,300)
  ball2= new Ball(320,300)
  ball3= new Ball(440,300)
  ball4= new Ball(560,300)
  ball5= new Ball(680,300)

  string1= new String(ball.body,{x:200,y:100})
  string2= new String(ball2.body,{x:320,y:100})
  string3= new String(ball3.body,{x:440,y:100})
  string4= new String(ball4.body,{x:560,y:100})
  string5= new String(ball5.body,{x:680,y:100})
  }

function draw() {
  background(0); 
  Engine.update(engine) 
  rectMode(CENTER)

  rect( ground.position.x , ground.position.y ,1200,10);
   
  ball.display()
  string1.display()

  ball2.display()
  string2.display()

  ball3.display()
  string3.display()
  
  ball4.display()
  string4.display()

  ball5.display()
  string5.display()
  }

  function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }