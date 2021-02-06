const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var raindrops = [];

function preload(){

}

function setup(){
    // var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
    var canvas = createCanvas(1536,722);
    engine = Engine.create();
    world = engine.world;

  }

function draw(){

    background(0);

    Engine.update(engine);

    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,7);
      raindrops.push(raindrop);
    }

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

    drawSprites();
}   