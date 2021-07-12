var bg1,bg2,bg3,bg4,bg5,b6,bg7,bg8,playImg,play,play2Img,play2;
var gameState="start";
var a1,a2,a3,aa1,aa2,aa3,aaa1,aaa2,a1Img,a2Img,a3Img,aa1Img,aa2Img,aa3Img,aaa1Img,aaa2Img;
var a41,a42,a51,a52,a61,a62,a41Img,a42Img,a51Img,a52Img,a61Img;
function preload(){
  bg1=loadImage("./Images/background1.png");
  bg2=loadImage("./Images/backgroundq1 (1).png");
  bg3=loadImage("./Images/backgroundq2 (2).png");
  bg4=loadImage("./Images/backgroundq3 (3).png");
  bg5=loadImage("./Images/background2.png");


  bg6=loadImage("./Images/backgroundq4.png");
  bg7=loadImage("./Images/backgroundq5.png");
  bg8=loadImage("./Images/backgroundq6.png");

  playImg=loadImage("./Images/play.png");
  play2Img=loadImage("./Images/play22.png");

  a1Img=loadImage("./Images/q1a.jpg");
  a2Img=loadImage("./Images/q1b.jpg");
  a3Img=loadImage("./Images/q1c.jpg");

  aa1Img=loadImage("./Images/q2a.jpg");
  aa2Img=loadImage("./Images/q2b.jpg");
  aa3Img=loadImage("./Images/q2c.jpg");

  aaa1Img=loadImage("./Images/q3a.jpg");
  aaa2Img=loadImage("./Images/q3b.jpg");

  a41Img=loadImage("./Images/q4a.jpg");
  a42Img=loadImage("./Images/q4b.jpg");

  a51Img=loadImage("./Images/q5a.jpg");
  a52Img=loadImage("./Images/q5b.jpg");

  a61Img=loadImage("./Images/q6a.jpg");
  a62Img=loadImage("./Images/q6b.jpg");
  
}

function setup(){
  createCanvas(1300,700);
  play=createSprite(1000,150);
play.addImage(playImg);
play.scale=0.15;

play2=createSprite(1200,550);
play2.addImage(play2Img);
play2.scale=0.5;
 
a1=createSprite(200,500);
a1.addImage(a1Img);
a1.scale=0.15;

a2=createSprite(600,500);
a2.addImage(a2Img);
a2.scale=0.15;

a3=createSprite(1000,500);
a3.addImage(a3Img);
a3.scale=0.15;

aa1=createSprite(200,550);
aa1.addImage(aa1Img);
aa1.scale=0.15;

aa2=createSprite(600,550);
aa2.addImage(aa2Img);
aa2.scale=0.15;
aa3=createSprite(1000,550);
aa3.addImage(aa3Img);
aa3.scale=0.15;

aaa1=createSprite(200,600);
aaa1.addImage(aaa1Img);
aaa1.scale=0.15;

aaa2=createSprite(600,600);
aaa2.addImage(aaa2Img);
aaa2.scale=0.15;

a41=createSprite(520,260);
a41.addImage(a41Img);
a41.scale=0.15;

a42=createSprite(800,260);
a42.addImage(a42Img);
a42.scale=0.15;

a51=createSprite(520,300);
a51.addImage(a51Img);
a51.scale=0.15;

a52=createSprite(840,300);
a52.addImage(a52Img);
a52.scale=0.15;

a61=createSprite(600,150);
a61.addImage(a61Img);
a61.scale=0.15;

a62=createSprite(950,150);
a62.addImage(a62Img);
a62.scale=0.15;


}


function draw(){
  background(bg1);
  if(gameState==="start"){
    play.visible =true;
    play2.visible =false;
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;
     
    a41.visible =false;
    a42.visible =false;

    a51.visible =false;
    a52.visible =false;

    a61.visible =false;
    a62.visible =false;
    
    if(mousePressedOver(play)){ 
      background(bg2); 
      gameState="level1";
      
    }
  }
  if(gameState==="level1"){
    background(bg2); 
      play.visible=false;
      play2.visible =false;
      a1.visible =true;
    a2.visible =true;
    a3.visible =true;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;

    a41.visible =false;
    a42.visible =false;
    
    a51.visible =false;
    a52.visible =false;

    a61.visible =false;
    a62.visible =false;

    if(mousePressedOver(a2)){
      background(bg3);
      
      gameState="question2";
    }

  }
  if(gameState==="question2"){
    background(bg3);
    play2.visible =false;
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =true;
    aa2.visible =true;
    aa3.visible =true;

    aaa1.visible =false;
    aaa2.visible =false;

    a41.visible =false;
    a42.visible =false;

    a51.visible =false;
    a52.visible =false;

    a61.visible =false;
    a62.visible =false;
    
    if(mousePressedOver(aa3)){
      background(bg4);
      gameState="question3";
    }
    
  }
  
  if(gameState==="question3"){
    background(bg4);
    aaa1.visible =true;
    aaa2.visible =true;
    a1.visible =false;
    a2.visible =false;
    a3.visible =false;
    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;
    play2.visible =false;

    a41.visible =false;
    a42.visible =false;

    a51.visible =false;
    a52.visible =false;

    a61.visible =false;
    a62.visible =false;
    
  }
  if(mousePressedOver(aaa2)){
    background(bg5);
    gameState="level2";
  }
  
  if(gameState==="level2"){
    background(bg5);
    play2.visible =true;

    a1.visible =false;
    a2.visible =false;
    a3.visible =false;

    aa1.visible =false;
    aa2.visible =false;
    aa3.visible =false;

    aaa1.visible =false;
    aaa2.visible =false;

    a41.visible =false;
    a42.visible =false;
    
    a51.visible =false;
    a52.visible =false;

    a61.visible =false;
    a62.visible =false;

    if(mousePressedOver(play2)){
      background(bg6);
      gameState="question4";
    }
    
  }
if(gameState==="question4"){
  background(bg6);
  a41.visible =true;
    a42.visible =true;
    
  play2.visible =false;
  a51.visible =false;
  a52.visible =false;

  a61.visible =false;
    a62.visible =false;
}
if(mousePressedOver(a42)){
  background(bg7);
  gameState="question5";
}
if(gameState==="question5"){
  background(bg7);
  a51.visible =true;
  a52.visible =true;
  a41.visible =false;
    a42.visible =false;
    a61.visible =false;
    a62.visible =false;
}
if(mousePressedOver(a51)){
  background(bg8);
  gameState="question6";
}
if(gameState==="question6"){
  background(bg8);
  a61.visible =true;
    a62.visible =true;
  a51.visible =false;
  a52.visible =false;
  a41.visible =false;
    a42.visible =false;
}

  drawSprites();

}

