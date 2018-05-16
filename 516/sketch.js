var particleSystems = [];
var r, g, b;

function setup() {
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2, 30);
  sldrR = createSlider(0, 100, 50);
  sldrR.position(10, 10);
  sldrG = createSlider(0, 800, 50);
  sldrG.position(10, 40);
  sldrB = createSlider(0, 1400, 50);
  sldrB.position(10, 70);
  frameRate(60);
  count = 0;

}

function draw() {
  background(21, 3);
  r = sldrR.value();
  g = sldrG.value();
  b = sldrB.value();

   for(var i = 0; i < particleSystems.length; i++){
      particleSystems[i].addParticle();
      particleSystems[i].run();
   }
}


function mouseClicked() {
  var mouseLoc = createVector(mouseX, mouseY);
  particleSystems.push(new particleSystem(mouseLoc, color(255, 0,0,200)));
  var clr = color(random(255), random(255), random(255));
}
