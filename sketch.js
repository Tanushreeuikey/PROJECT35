var balloon,balloonImage1,balloonImage2;
var database,positionn;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
 
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  database=firebase.database();
  //database.ref("balloon/position").on("value",readPos)

  textSize(20); 
}

// function to display UI
function draw()
 {
  background(bg);

  if(keyDown(LEFT_ARROW))
  {
    changePosition(-1,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW))
  {
    changePosition(1,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW))
  { 
    changePosition(0,-1);
   balloon.scale=0.4;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW))
  {
    changePosition(0,1);
    balloon.scale=0.5;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function changePosition(x,y)
{
    //database.ref("balloon/position").set({x:positionn.x+x,y:positionn.y+y})
    balloon.x = balloon.x + x;
    balloon.y = balloon.y + y;
}

/*function readPos(data)
{
    positionn=data.val()
    balloon.x=positionn.x
    balloon.y=positionn.y
}*/