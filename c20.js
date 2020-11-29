var fixedrect,movablerect
function setup() {
  createCanvas(1200,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movablerect=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  movablerect.x=World.mouseX 
  movablerect.y=World.mouseY 
 
 
  console.log(movablerect.x)
  if(fixedrect.x-movablerect.x<=fixedrect.width/2+movablerect.width/2 &&
    movablerect.x-fixedrect.x<=fixedrect.width/2+movablerect.width/2 && 
    fixedrect.y-movablerect.y<=fixedrect.height/2+movablerect.height/2 &&
    movablerect.y-fixedrect.y<=fixedrect.height/2+movablerect.height/2){
    movablerect.shapeColor="green"
    fixedrect.shapeColor="green"   
  }
  else{
    movablerect.shapeColor="red"
    fixedrect.shapeColor="red"  
  }
  drawSprites();
}
