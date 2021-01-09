const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24;
var block25,pentagon;
var sling,ground1;
var score = 0;
var backgroundImg,blockImg;

function preload()
{
blockImg = loadImage("corona.png");
backgroundImg = loadImage("images.jpg");
}

function setup() {
  createCanvas(1500,900);
  //createSprite(400, 200, 1200, 800);
  engine = Engine.create();
  world = engine.world;


 ground = new Ground(900, 400, 400, 15);
 ground1 = new Ground(500, 800, 2000, 20);

  block3 = new Block(800, 300, 50 ,50);
  //block18 = new Block(860, 305, 20, 30);
  //block3.addImage(blockImg);

 block4 = new Block(830, 300, 50 ,50);
  //block4.addImage(blockImg);

  block5 = new Block(860, 300, 50 ,50);
 // block5.addImage(blockImg);

  block6 = new Block(890, 300, 20, 30);
  //block6.addImage(blockImg);

  block7 = new Block(920, 300, 20, 30);
 // block7.addImage(blockImg);

  block8 = new Block(800, 260, 20, 30);
 // block8.addImage(blockImg);

  block9 = new Block(830, 260, 20, 30);
  //block9.addImage(blockImg);

  block10 = new Block(860, 260, 20, 30);
 //block10.addImage(blockImg);

  block11 = new Block(890, 260, 20, 30);
 // block11.addImage(blockImg);

  block12 = new Block(920, 260, 20, 30);
  //block12.addImage(blockImg);

  block13 = new Block(800, 225, 20, 30);
  block14 = new Block(830, 225, 20, 30);
  block15 = new Block(860, 225, 20, 30);
  block16 = new Block(890, 225, 20, 30);
  block17 = new Block(920, 225, 20, 30);

  block18 = new Block(800, 180, 20, 30);
  block19 = new Block(830, 180, 20, 30);
  block20 = new Block(860, 180, 20, 30);
  block21 = new Block(890, 180, 20, 30);
  block22 = new Block(920, 180, 20, 30);

  block23 = new Block(830, 140, 20, 30);
  block24 = new Block(860, 140, 20, 30);
  block25 = new Block(890, 140, 20, 30);

  
  pentagon=new Pentagon(300,400)
  sling=new Slingshot(pentagon.body,{x:300 , y:400})
  
  Engine.run(engine);

}

function draw() {
  //console.log(backgroundImg)
  if(backgroundImg)
    background(backgroundImg);
    noStroke();
        textFont("Impact")
        textSize(20)
        fill("Red")
        text("Score : " + score, width-300, 20); 

  ground.display();
  //block1.display();
  //block2.display();
  fill("purple")
  block3.display();
  block3.score();
  //fill("yellow")
  block4.display();
  block4.score();

//  fill("purple")
 block5.display();  
    block5.score();

 // fill("yellow")
  block6.display();
  block6.score();

//  fill("purple")
  block7.display();
  block7.score();

 /// fill("yellow")
  block8.display();
  block8.score();

 /// fill("purple")
  block9.display();
  block9.score();

 /// fill("yellow")
  block10.display();
  block10.score();

 // fill("purple")
  block11.display();
  block11.score();

 // fill("yellow")
  block12.display();
  block12.score();

//  fill("purple")
  block13.display();
  block13.score();

//  fill("yellow")
  block14.display();
  block14.score();

 // fill("purple")
  block15.display();
 block15.score();

 // fill("yellow")
  block16.display();
  block16.score();

block17.display();
block17.score();

block18.display();
block18.score();

block19.display();
block19.score();

block20.display();
block20.score();

block21.display();
block21.score();

block22.display();
block22.score();

block23.display();
block23.score();

block24.display();
block24.score();

block25.display();
block25.score();


 pentagon.display();
sling.display();
//fill("yellow");

ground1.display();
drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
  
}
function keyPressed(){
  if (keyCode===32){
    sling.attach(pentagon.body);
    Matter.Body.setPosition(pentagon.body, {x: 200 , y: 50});         
  }
  }