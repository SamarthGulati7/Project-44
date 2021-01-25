const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box27,box28,box29,box30,box31,box32,box33;
var thief;
var mazeimg;

function preload(){

    mazeimg = loadImage("maze.jpg");

}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,48,1000,5);
    box2 = new Box(995,415,5,730);
    box3 = new Box(500,775,1000,5);
    box4 = new Box(5,415,5,730);
    box5 = new Box(360,220,5,340);
    box6 = new Box(905,100,5,100);
    box7 = new Box(820,210,5,150);
    box8 = new Box(905,280,180,5);
    box9 = new Box(615,160,220,5);
    box10 = new Box(175,150,130,5);
    box11 = new Box(115,210,5,110);
    box12 = new Box(375,270,525,5);
    box13 = new Box(640,475,5,405);
    box14 = new Box(720,270,5,210);
    box15 = new Box(495,380,5,210);
    box16 = new Box(130,390,250,5);
    box17 = new Box(255,445,5,110);
    box18 = new Box(570,425,5,130);
    box19 = new Box(470,490,210,5);
    box20 = new Box(440,555,5,120);
    box21 = new Box(370,555,5,120);
    box22 = new Box(257,617,230,5);
    box23 = new Box(140,555,5,120);
    box24 = new Box(145,735,5,70);
    box25 = new Box(255,735,5,70);
    box26 = new Box(340,700,170,5);
    box27 = new Box(510,715,5,120);
    box28 = new Box(720,680,150,5);
    box29 = new Box(800,625,5,110);
    box30 = new Box(730,530,5,125);
    box31 = new Box(818,462,175,5);
    box32 = new Box(805,375,180,5);
    box33 = new Box(900,575,5,400);
    thief = new Thief(480,400);
}

function draw(){
    background("black");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    thief.display();
}
function keyPressed(){

    if(keyCode === UP_ARROW){

        thief.body.position.y -= 5; 
    }   
    if(keyCode === DOWN_ARROW){

        thief.body.position.y += 5; 
    }   
    if(keyCode === LEFT_ARROW){

        thief.body.position.x -= 5; 
    }   
    if(keyCode === RIGHT_ARROW){

        thief.body.position.x += 5; 
    }   

}