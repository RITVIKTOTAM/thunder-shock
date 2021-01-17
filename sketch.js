const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,thunderbolt1,bg,bgImage;

function preload(){

   bgImage = loadImage("bg.png");

}

function setup(){
   
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    
    
    bg = createSprite(400,400,800,800);
    bg.addImage(bgImage)
    boy = new Boy(400,700,10,10);
    thunderbolt1 = new Thunder(400,100,100,10);
    
}

function draw(){


   
   drawSprites();

   boy.display();
   thunderbolt1.display();

}   

