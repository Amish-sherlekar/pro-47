var spaceship1, spaceship1Img;

var spaceship2, spaceship2Img;

var spaceship3, spaceship3Img;

var spaceship4, spaceship4Img;

var spaceship5, spaceship5Img;

var spaceship6, spaceship6Img;

var spaceship7, spaceship7Img;

var spaceship8, spaceship8Img;

var spaceship9, spaceship9Img;

var spaceship10, spaceship10Img;

var asteroid, asteroidImg;

var laserBullets;

var asteroidGroup;

var boundry;

var endl;

var slowClapSound;

var m5Sound;

var bg;

var gsbg;

var gebg;

var SERVE = 0;

var END = 1;

var PLAY = 2;

var DETAIL = 3;

var gameState = SERVE;

var blastImg, blastSound;

var laserBulletsImg1;

var laserBulletsGroup;

var score = 0;

function preload() {
  spaceship1Img = loadImage ("images/Spaceship/spaceship (1).jpeg");

  spaceship2Img = loadImage ("images/Spaceship/spaceship (2).png");

  spaceship3Img = loadImage ("images/Spaceship/spaceship (3).png");

  spaceship4Img = loadImage ("images/Spaceship/spaceship (4).jpeg");

  spaceship5Img = loadImage ("images/Spaceship/spaceship (5).jpeg");

  spaceship6Img = loadImage ("images/Spaceship/spaceship (6).jpeg");

  spaceship7Img = loadImage ("images/Spaceship/spaceship (7).jpeg");

  spaceship8Img = loadImage ("images/Spaceship/spaceship (8).jpeg");

  spaceship9Img = loadImage ("images/Spaceship/spaceship (9).jpeg");
  
  spaceship10Img = loadImage ("images/Spaceship/spaceship(10).png");

  asteroidImg = loadImage("images/Asteroid/asteriod_1.png");

  bg = loadImage("images/Background/Game end.jpeg");

  gpbg = loadImage("images/Background/Game play.jpeg");

  gsbg = loadImage("images/Background/Game serve.jpeg");

  laserBulletsImg1 = loadImage("images/Bullets/laser5.png");

  blastImg = loadImage("images/Spaceship/blast.png");

  blastSound = loadSound ("images/lose.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceship1 = createSprite(200, 300);
  
  spaceship1.addImage(spaceship1Img);
  
  spaceship1.scale = 1;

  
  spaceship2 = createSprite(600, 300);
  
  spaceship2.addImage(spaceship2Img);
  
  spaceship2.scale = 1;

  
  spaceship3 = createSprite(1000, 300);
  
  spaceship3.addImage(spaceship3Img);

  spaceship3.scale = 1;


  spaceship4 = createSprite(1400, 300);

  spaceship4.addImage(spaceship4Img);

  spaceship4.scale = 1;


  spaceship5 = createSprite(1800, 300);

  spaceship5.addImage(spaceship5Img);

  spaceship5.scale = 1.5;


  spaceship6 = createSprite(200, 600);

  spaceship6.addImage(spaceship6Img);

  spaceship6.scale = 1;


  spaceship7 = createSprite(600, 600);

  spaceship7.addImage(spaceship7Img);

  spaceship7.scale = 1;


  spaceship8 = createSprite(1000, 600);

  spaceship8.addImage(spaceship8Img);

  spaceship8.scale = 1;


  spaceship9 = createSprite(1400, 600);

  spaceship9.addImage(spaceship9Img);

  spaceship9.scale = 0.4;


  spaceship10 = createSprite(1800, 600);

  spaceship10.addImage(spaceship10Img);

  spaceship10.scale = 1;

  // boundry = createSprite(1000, 950, 2000, 20);
  endl = createSprite(1000, height/2 + 400, 2000, 20)

  asteroidGroup = new Group();
  
  laserBulletsGroup = new Group();
  
  score = 0;
}

function draw() {
  if (gameState === SERVE) {
    // boundry.visible = false;
    console.log(mouseX, mouseY);
    endl.visible = false;
    background(gsbg);
    stroke(20);
    fill("black");
    textSize(40);
    text("Choose your spaceship", 600, 100);
    if (mousePressedOver(spaceship1)) {
      
      spaceship1.x = width / 2;
      
      spaceship1.y = 900;
      
      spaceship1.visible = true;
      
      spaceship2.visible = false;
      
      spaceship3.visible = false;
      
      spaceship4.visible = false;
      
      spaceship5.visible = false;
      
      spaceship6.visible = false;
      
      spaceship7.visible = false;
      
      spaceship8.visible = false;
      
      spaceship9.visible = false;
      
      spaceship10.visible = false;
      
      spaceship1.addImage(spaceship1Img);
      
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship2)) {
      
      spaceship1.x = width / 2;
      
      spaceship1.y = 900;
      
      spaceship1.visible = true;
      
      spaceship2.visible = false;
      
      spaceship3.visible = false;
      
      spaceship4.visible = false;
      
      spaceship5.visible = false;
      
      spaceship6.visible = false;
      
      spaceship7.visible = false;
      
      spaceship8.visible = false;
      
      spaceship9.visible = false;
      
      spaceship10.visible = false;
      
      spaceship1.addImage(spaceship2Img);
      
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship3)) {
      
      spaceship1.x = width / 2;
      
      spaceship1.y = 900;
      
      spaceship1.visible = true;
      
      spaceship2.visible = false;
      
      spaceship3.visible = false;
      
      spaceship4.visible = false;
      
      spaceship5.visible = false;
      
      spaceship6.visible = false;
      
      spaceship7.visible = false;
      
      spaceship8.visible = false;
      
      spaceship9.visible = false;
      
      spaceship10.visible = false;
      
      spaceship1.addImage(spaceship3Img);
      
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship4)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship4Img);
    
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship5)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship5Img);
    
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship6)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship6Img);
    
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship7)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship7Img);
    
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship8)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship8Img);
    
      gameState = DETAIL;
    
    } else if (mousePressedOver(spaceship9)) {
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship9Img);
    
      spaceship1.scale = 0.3;
    
      gameState = DETAIL;
    
    }else if (mousePressedOver(spaceship10)){
    
      spaceship1.x = width / 2;
    
      spaceship1.y = 900;
    
      spaceship1.visible = true;
    
      spaceship2.visible = false;
    
      spaceship3.visible = false;
    
      spaceship4.visible = false;
    
      spaceship5.visible = false;
    
      spaceship6.visible = false;
    
      spaceship7.visible = false;
    
      spaceship8.visible = false;
    
      spaceship9.visible = false;
    
      spaceship10.visible = false;
    
      spaceship1.addImage(spaceship10Img);
    
      spaceship1.scale = 1;
    
      gameState = DETAIL;
    
    }
  }else if(gameState === DETAIL) {
    

    background(0, 223, 174);
    textSize(20);
    fill("red")
    text("Rules of the game:\n\nLose state:   If asteroid touches the spaceship.\n                   If asteroid touches the end of the bottom\n\nWin: state: This is a infinite game so there is no win state", 500, 200)

    endl.visible = false;
    spaceship1.visible = false;

    fill("blue")
    text("Press space to continue", 500, 100)

    if(keyDown("space")){
      gameState = PLAY;
    }
  }else if (gameState === PLAY) {
    
    background(gpbg);
    fill("white")
    textSize(40);
    text("Score: " + score, 500,50);
    
    endl.visible = false;
    
    spaceship1.visible = true;
    
    asteroidGp();

    if(keyDown("up")){
      spaceship1.y = spaceship1.y - 50;
    }

    if(keyDown("down")){
      spaceship1.y = spaceship1.y + 50;
    }
    
    if(keyDown("left")){
      spaceship1.x = spaceship1.x - 50;
    }
    
    if(keyDown("right")){
      spaceship1.x = spaceship1.x + 50;
    }
    
    if (keyDown("space")) {
      laserShoots();
    }



    if(asteroidGroup.isTouching(laserBulletsGroup)){
      for (let i = 0; i < asteroidGroup.length; i++) {
        if(asteroidGroup[i].isTouching(laserBulletsGroup)){
          asteroidGroup[i].destroy();
          laserBullets.destroy();
          score = score + 1;
        }
      }
    }
    
    if(asteroidGroup.isTouching(spaceship1)){
      for (let i = 0; i < asteroidGroup.length; i++) {
        if(asteroidGroup[i].isTouching(spaceship1)){
          asteroidGroup.destroyEach();
          laserBulletsGroup.destroyEach();
          // spaceship1.destroy();
          
          spaceship1.scale = 2;
          spaceship1.x = 250;
          blastSound.play()

          gameState = END;
          
          spaceship1.addImage(blastImg)
        }        
      }
    }

    if(asteroidGroup.isTouching(endl)){
      for (let i = 0; i < asteroidGroup.length; i++) {
        if(asteroidGroup[i].isTouching(endl)){
          asteroidGroup.destroyEach();
          laserBulletsGroup.destroyEach();
          spaceship1.destroy();
          endl.destroy();
          gameState = END;
        }        
      }
    }

  }else if (gameState === END){
    background(bg)
    endl.visible = false;
    textSize(60);
    stroke(20);
    fill("White");
    if (score === 0) {
    textSize(60);
    stroke(20);
    fill("red");
    text("Score :::::: " + score,width - 500, 80);
    }else if(score === 1){
      textSize(60);
      stroke(20);
      fill(238, 255, 0);
      text("Score : " + score,width - 500, 80);
    }else if(score === 5){
      textSize(60);
      stroke(20);
      fill(221, 128, 6);
      slowClapSound.play();
      text("Score : " + score,width - 500, 80);
    }else if(score === 10){
      textSize(60);
      stroke(20);
      fill(221, 207, 6);
      text("Score : " + score,width - 500, 80);
    }else{
      textSize(60);
      stroke(20);
      fill(13, 221, 6);
      text("Score : " + score,width - 500, 80);
      text("Great job nice good score",width - 800, 150);
    }
  }
  if(gameState === END){
    textSize(100);
    text("Plane crashed",displayWidth - 500, displayHeight/2);
  }
  drawSprites();
}

function asteroidGp() {
  if (frameCount % 100 === 0) {
    asteroid = createSprite(random(100, 1500), displayHeight / 2 - 400);
    asteroid.addImage(asteroidImg);
    asteroid.scale = random(0.2, 0.4);
    asteroid.velocityY = +(6 +  3*score/4);
    asteroid.lifetime = 300;
    asteroidGroup.add(asteroid);
    asteroid.depth = asteroid.depth;
    spaceship1.depth = asteroid.depth - 1;
  }
}

function laserShoots() {
  laserBullets = createSprite(spaceship1.x, spaceship1.y);
  laserBullets.addImage(laserBulletsImg1);
  laserBullets.scale = 0.1;
  laserBullets.velocityY = -250;
  laserBullets.lifetime = 80;
  laserBulletsGroup.add(laserBullets);
}