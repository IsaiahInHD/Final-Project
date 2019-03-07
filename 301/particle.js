function Particle(loc, clr){
  this.acc = createVector(random(-.005, .005), random(-.005, .005));
  this.vel = createVector(random(-1.0, 1.0), random(-1.0, 1.0));
  this.loc = loc.copy();
  this.lifespan = 255.0;
  this.clr = clr;
  this.angle = random(TWO_PI);
  this.w = 2;
  this.colorCount = 0;
  //  ++++++++++++++++++++++++++++ Methods
  this.update = function(){
    this.colorCount++;
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.loc.add(this.vel);
    this.lifespan -= 1;
    this.angle += .01;
    this.render();
  };

  this.render = function(){
    strokeWeight(8.3);
    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      scale(this.colorCount/200);
      stroke(r, g, b)
      fill(20, 20, 20);
      arc(0, 0, ++this.w, ++this.w, 0, PI/4);
    pop();
  };

  this.isDead = function(){
    if (this.lifespan < 0.0)  {
      return true;
    } else {
      return false;
    }



  }


}
