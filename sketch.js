const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
//drclare var drops array
var drops=[]
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    //Load the other 3 thunder images as above
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    //create umbrella object
    umbrella=new Umbrella(200,250);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            // create new Drops() objects at random x and y position and push them in drops[]
            drops.push(new Drops(random(0,400),random(0,400)))
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
rand=Math.round(random(1,4));
    // take a random number between 1-4 and round it off and assign to rand variable
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
                

            default: break;
        }
        // scale the thunder to a random number between 0.3 - 0.6
        thunder.scale=random(0.3,0.6);
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    // display umberlla object
umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        // call showdrops() and updateDrops() for each drop object in teh drops[]
        drops[i].showDrop();
        drops[i].updateDrops();
    }

    drawSprites();
}   

