var ps;
var partSystems = [];

  function setup() {
    var cnv = createCanvas(1100, 800);
    cnv.position((windowWidth-width)/2, 30);
    ps = new ParticleSystem(createVector(width/2, height/2));
    frameRate(60);
    count = 0;
  }

  function draw() {
    background(21, 21, 21, 5);

    for(var i = 0; i < partSystems.length; i++){
      partSystems[i].addParticle();
      partSystems[i].run();
    }

  }

  function mouseClicked() {
    var clr = color(random(255), random(255), random(255));
    partSystems.push(new ParticleSystem(createVector(mouseX, mouseY), clr));
}
