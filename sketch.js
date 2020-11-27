const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var background_img;
var log,platform;
var chain;

function preload(){
  background_img=loadImage("images/bg.png");
}

function setup() {
  createCanvas(1200,800);
  engine= Engine.create();
  world= engine.world;

  ground = new Ground(600,780,1200,40);
  platform = new Ground(150,600,300,400);

  box1 = new Box(700,720,70,70);
  box2 = new Box(920,720,70,70);
  pig1 = new Pig(810,720);
  log1 = new Log(810,660,20,300,PI/2);

  box3 = new Box(700,640,70,70);
  box4 = new Box(920,640,70,70);
  pig2 = new Pig(810,640);
  log2 = new Log(810,580,20,300,PI/2);

  box5 = new Box(810,560,70,70);
  log3 = new Log (760,520,20,150,PI/7);
  log4 = new Log(870,520,20,150,-PI/7);

  bird= new Bird(100,100);
  log = new Log(200,300,20,100,PI/2);
  chain = new Chain(bird.body,log.body);
  
}

function draw() {
  background(background_img);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  platform.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  log.display();
  chain.Display();
 
}