
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;
//var plinko1, plinko2, plinko3, plinko4;
var divisions=[];
var plinkos=[];
var particle=[];
var rand2;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);


  rand2 = random(width / 2 - 15, width / 2 + 15);
  particle = new Particle(rand2, 10,PI/2);
  plinkos = new Plinko();
  ground = new Ground(width / 2, 790, width, 20);
}

function draw() {
  background(0);

  for (var i = 0; i <= width; i = i + 80) {
    divisions = new Division(i, 700);
    divisions.display();
  }

  for (var x = 38; x <= width; x = x + 50) {
    plinko1 = new Plinko(x, 50);
    plinko1.display();
    plinko3 = new Plinko(x, 200);
    plinko3.display();
  }
  for (var y = 15; y <= width; y = y + 50) {
    plinko2 = new Plinko(y, 125);
    plinko2.display();
    plinko4 = new Plinko(y, 275);
    plinko4.display();
  }
  plinkos=[plinko1,plinko2,plinko3,plinko4];

  if (frameCount%60===0) {
    particle=new Particle(100,10,10);
  }

  //console.log(particle.body.isStatic);

  particle.display();
  ground.display();

}