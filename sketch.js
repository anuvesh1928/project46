var bgimg;
var spaceshipimg;
var spaceship;
var astimg;
var ast;
var astgrp;
var hrt1;
var hrt2;
var hrt3;
var heart;
var heart2;
var heart3;

function preload(){
bgimg = loadImage("assets/space.jpg");
spaceshipimg = loadImage("assets/rocket-19697.png");
astimg = loadImage("assets/asteroid.png");
hrt1 = loadImage("assets/heart_1.png");
hrt2 = loadImage("assets/heart_2.png");
hrt3 = loadImage("assets/heart_3.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,500,50);
bg.addImage(bgimg)
bg.scale = 0.5;

spaceship = createSprite(displayWidth-700,displayHeight-300,40,40);
spaceship.addImage(spaceshipimg);
spaceship.scale = 0.25;


spaceship.debug = true;
spaceship.setCollider("rectangle", 0, 0, 500, 800);

heart = createSprite(displayWidth - 150, displayHeight - 700, 20, 20);
    heart.addImage(hrt3);
    heart.scale = 0.4;
    

    heart2 = createSprite(displayWidth - 150, displayHeight - 800, 20, 20);
    heart2.addImage(hrt2);
    heart2.scale = 0.4;
    heart2.visible = false;

    heart3 = createSprite(displayWidth - 150, displayHeight - 700, 20, 20);
    heart3.addImage(hrt1);
    heart3.scale = 0.4;
    heart3.visible = false;


astgrp = new Group();

}

function draw(){
background("white");
 
if(keyDown("RIGHT_ARROW"))
{
    spaceship.x=spaceship.x+10;
}

if(keyDown("LEFT_ARROW"))
{
    spaceship.x=spaceship.x-10;
}
astcollide();
astmove();
drawSprites();
}

function astmove(){
    if (frameCount % 60 === 0) {
        ast = createSprite(random(100,1000), random(0,10), 50, 50);
        ast.addImage(astimg);
        ast.scale = 0.07;
        ast.velocityY = 5;

        ast.debug = true;
        ast.setCollider("rectangle", 0, 0, 1000, 1000);
        ast.lifetime = 420;
        astgrp.add(ast);

    }
}

function astcollide(){
    for (var i = 0; i < astgrp.length; i++) {
        if (astgrp[i].isTouching(spaceship)) {
            astgrp[i].destroy();
        }
    }
}