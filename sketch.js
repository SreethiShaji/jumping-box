var canvas;
var music;
var box, surface1, surface2, surface3, surface4, surface5;
var invisibleR, invisibleL, invisibleT;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(90,550,135,30);
    surface1.shapeColor = rgb(57,255,20);

    surface2 = createSprite(245,550,135,30);
    surface2.shapeColor = rgb(128,0,128)

    surface3 = createSprite(399,550,135,30);
    surface3.shapeColor = rgb(0,255,255); 

    surface4 = createSprite(555,550,135,30);
    surface4.shapeColor = rgb(0,0,139);

    surface5 = createSprite(710,550,135,30);
    surface5.shapeColor = rgb(255,255,0);

  //create box sprite and give velocity

    box = createSprite(20,20,30,30);
    box.velocityX = 6;
    box.velocityY = 7;
    box.shapeColor = rgb(255, 255, 255);

    invisibleR = createSprite(800,300,20,600)
    invisibleR.visible = false;

    invisibleL = createSprite(0,300,20,600)
    invisibleL.visible = false;

    invisibleT = createSprite(400,0,800,20)
    invisibleT.visible = false;
}

function draw() {

    background(rgb(169,169,169));

    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = rgb(255,255,255);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = rgb(128,0,128);
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = rgb(0,255,255); 
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = rgb(0,0,139);
    }

    if(surface5.isTouching(box) && box.bounceOff(surface5)) {
        box.shapeColor = rgb(255,255,0);
    }

    box.bounceOff(invisibleR);
    box.bounceOff(invisibleL);     
    box.bounceOff(invisibleT);

    
        fill(rgb(57,255,20));
        text("the ball and music will stop when the ball touches 'green' block", 200, 20);
    

    
    
      

    drawSprites()

   
  
      

      

}
