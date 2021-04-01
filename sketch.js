const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bog1,bog2,bog3,bog4,bog5,bog6;
var bg,rock1;
var flag=0;


var score = 0;
function preload() {
    
    bg=loadImage("images/bg.jpg")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    bog1 = new Boggie(50,170,50,50)
    bog2 = new Boggie(150,170,50,50)
    bog3 = new Boggie(250,170,50,50)
    bog4 = new Boggie(350,170,50,50)
    bog5 = new Boggie(450,170,50,50)
    bog6 = new Boggie(550,170,50,50)

    chain1 = new Chain(bog1.body,bog2.body)
    chain2 = new Chain(bog2.body,bog3.body)
    chain3 = new Chain(bog3.body,bog4.body)
    chain4 = new Chain(bog4.body,bog5.body)
    chain5 = new Chain(bog5.body,bog6.body)

    rock1= new Rock(1100,200,100,100)



   /* // platform = new Ground(150, 305, 300, 170);

    // box1 = new Box(700,320,70,70);
    // box2 = new Box(920,320,70,70);
    // pig1 = new Pig(810, 350);
    // log1 = new Log(810,260,300, PI/2);

    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    // pig3 = new Pig(810, 220);

    // log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    // bird = new Bird(200,50);

    // //log6 = new Log(230,180,80, PI/2);
    // slingshot = new SlingShot(bird.body,{x:200, y:50}); */
}

function draw(){
    
        background(bg);
    

        // noStroke();
        // textSize(35)
        // fill("white")
        // text("Score  " + score, width-300, 50)
        
    Engine.update(engine);



    bog1.show();
    bog2.show();
    bog3.show();
    bog4.show();
    bog5.show();
    bog6.show();

    chain1.show();
    chain1.show();
    chain1.show();
    chain1.show();
    chain1.show();

    rock1.show();

    var collision = Matter.SAT.collides(bog6.body,rock1.body);
    if(collision.collided)
    {
         flag = 1;
    }
    if(flag === 1){
    textSize(30)
    fill("blue")
    text("CRASH",500,200)

    }
    //strokeWeight(4);
 /*   box1.display();
    box2.display();
    ground.display();
    pig1.display();
 //  pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
//pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); */    
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       
       Matter.Body.applyForce(bog6.body,{x:bog6.body.position.x, y:bog6.body.position.y},{x:0.5,y:0});
    //    slingshot.attach(bird.body);
    }



}



