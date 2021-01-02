const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;
const r = 180
var ground1,ground2,ground3,ground4;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,
block13,block14,block15,block16,block7,block18,block19,block20,block21,block22,block23
,block24,block25;
var polygon,polygonImg;
var slingShot;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup(){
  var canvas= createCanvas(1200,600);
   engine = Engine.create();
    world = engine.world;

ground1 = new Ground(600,590,1200,10);
ground2 = new Ground(600,560,450,10);
ground3 = new Ground(1000,385,300,10);
block1 = new Box (525,550,50,75);
block2 = new Box (550,550,50,75);
block3 = new Box (575,550,50,75);
block4 = new Box (600,550,50,75);
block5 = new Box (625,550,50,75);
block6 = new Box (650,550,50,75);
block7 = new Box (675,550,50,75);
block8 = new Box (550,500,50,65);
block9 = new Box (575,500,50,65);
block10 = new Box (600,500,50,65);
block11 = new Box (625,500,50,65);
block12 = new Box (650,500,50,65);
block13 = new Box(575,450,50,55);
block14 = new Box (600,450,50,55);
block15 = new Box(625,450,50,55);
block16 = new Box(600,400,50,45);
block17 = new Box (950,375,50,60);
fill("pink");
block18 = new Box (975,375,50,60);
block19 = new Box (1000,375,50,60);
block20 = new Box (1025,375,50,60);
block21 = new Box (1050,375,50,60);
block22 = new Box (975,325,50,50);
block23 = new Box (1000,325,50,50);
block24 = new Box (1025,325,50,50);
block25 = new Box (1000,275,50,40);
//polygon = new Polygon(100,200,50);
var options = {
  isStatic:false,
  restitution:0,
  friction:0.1,
  density:0.6
 
}
polygon = Bodies.circle(100,300,r/8,options);
//polygon.debug=true

World.add(world,polygon);

slingShot = new SlingShot(polygon,{x:100, y:300});

//Engine.update(engine);
Engine.run(engine);

}
function draw(){
    background(225);
    Engine.update(engine);
    fill(0);
    textSize(30);
    text("drag the hexagonal stone and release it,to launch it towards the block",10,50);
    
    ground1.display();
    ground2.display();
    ground3.display();
    fill(255);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    fill(255);
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    fill(255,255,255);
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    //lygon.display();
    slingShot.display();
    fill(255)
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,50,50);
    //image(polygon)
     drawSprites();
}
       
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX , y:mouseY});
   
  }
  
  function mouseReleased(){
   slingShot.fly();
  }
  function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:100 , y:300});
    slingShot.attach(this.polygon);
  }
  }
  