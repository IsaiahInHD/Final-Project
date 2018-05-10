var particleSystems = [];

function setup() {
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2, 30);
  //ps = new particleSystem(createVector(width/2, height/2));
  frameRate(60);
  count = 0;

}

function draw() {
  background(21, 3);

   for(var i = 0; i < particleSystems.length; i++){
      particleSystems[i].addParticle();
      particleSystems[i].run();
   }

      //  textSize(32);
      //  fill(127,50, 90);
      //  text('num Particles = '+ ps.particles.length, 40, 30);

}


function mouseClicked(){
  var mouseLoc = createVector(mouseX, mouseY);
  particleSystems.push(new particleSystem(mouseLoc, color(255, 0,0,200)));
  var clr = color(random(255), random(255), random(255));

}

// function mouseMoved() {
//   ellipse(mouseX, mouseY, 5, 5);
//   // prevent default
//   return false;
// }
