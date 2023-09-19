  function setup() {
  createCanvas(800, 800);
background("black");
 }

  function draw() {
  
  stroke("yellow ");
  fill("green");
  
  //console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
 rect(mouseX, mouseY, 40, 55);
  }  
}  
  
