var fixedrec, movingrec,square1,square2;




function setup() {
  createCanvas(1200,800);
 fixedrec =  createSprite(400, 100, 50, 80);
 fixedrec.velocityY = +5;
 movingrec =  createSprite(400, 800, 80, 30);
 movingrec.velocityY = -5;
 movingrec.shapeColor = "green";
 fixedrec.shapeColor = "green";
  square1=  createSprite(800, 100, 80, 30);
 square2 =  createSprite(800, 800, 80, 30);
 square1.velocityY = +5;
 square2.velocityY = -5;
}

function draw() {
  background(0);  

   bounceoff(fixedrec,movingrec);
   bounceoff(square1,square2);

  drawSprites();
}








