const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var chain1;
var ground;
var ball1;
var build1,build2,build3,build4,build5,build6,build7,build8,build9,build10



function setup(){
    var canvas = createCanvas(1200,900);

    engine = Engine.create();
    world = engine.world;
     build1=new Box (500,20,100,100)
     build2=new Box (500,20,100,100)
     build3=new Box (500,20,100,100)
     build4=new Box (500,20,100,100)
     build5=new Box (500,20,100,100)
     build6=new Box (700,20,100,100)
     build7=new Box (700,20,100,100)
     build8=new Box (700,20,100,100)
     build9=new Box (700,20,100,100)
     build10=new Box (700,20,100,100)
    
    ground = new Ground(600,600,1200,20);
    ball1=new ball(20,93,100,100,PI)
    chain1= new rope(ball1.body,{x:150,y:80})
    }

function draw(){
    background(30);
    Engine.update(engine);
     ball1.display();
     chain1.display();
    ground.display();
    build1.display();
    build2.display();
    build3.display();
    build4.display();
    build5.display();
    build6.display();
    build7.display();
    build8.display();
    build9.display();
    build10.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
