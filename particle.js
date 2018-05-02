
  function Particle(loc, clr) {
    this.acc = createVector(0, 0);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.loc = loc.copy();
    this.lifespan = 800.0;
    this.clr = clr;
    this.center = createVector(width/2, height/2)

    this.update = function() {
      //  add acc to steer particles

      this.acc = p5.Vector.sub( this.center,this.loc);
      this.acc.setMag(0.01);

      this.vel.add(this.acc);
      this.vel.limit(1);
      this.loc.add(this.vel);
      this.lifespan -= 1;
      this.render();
    }

    this.render = function() {
      stroke(this.clr);
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 10, 10);

    }

    this.isDead = function() {
      if(this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }
  }
