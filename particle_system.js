var ParticleSystem = function(loc, clr) {
  this.origin = loc.copy();
  this.particles = [];
  this.clr = clr;

  this.addParticle = function() {
    var angle = random(TWO_PI);
    var rad = height/2-50;
    var loc = createVector(width/2+ cos(angle)*rad, height/2+sin(angle)*rad)
    this.particles.push(new Particle(loc, this.clr));
  };

  this.run = function() {
    for (var i = this.particles.length-10; i >=0; i--) {
      var p = this.particles[i];
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
} ;
