var balloon;
var database


function setup() {
  createCanvas(500,500);
  database = firebase.database();
  balloon = createSprite(400, 200, 50, 50);
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y -10; 
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;

  drawSprites();
  
}
var balloonPosition = database.ref('balloon/height');
    balloonPosition.on("value", readPosition,showError);


function draw() {
  background(255,255,255);  
  drawSprites();
  textSize = 5;
  fill("black")
  text = ("Press the arrow keys to move the ballon", 10,10)


}
function readPosition(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("error");
}

function writePosition(x,y){
  database.ref('balloon/height').set({
      'x':height.x + x,
      'y':height.y + y