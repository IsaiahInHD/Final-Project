

function Particle(loc, clr){
  this.acc = createVector(random(-.005, .005), random(-.005, .005));
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.loc = loc.copy();
  this.lifespan = 450.0;
  this.clr = clr;


  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.lifespan -= 1;
    this.render();
  };


  this.render = function(){
    stroke(127, 50, 190, this.lifespan);
    strokeWeight(3.5);
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 12, 12);

  };


  this.isDead = function(){
    if (this.lifespan < 0.0)  {
      return true;
    } else {

      return false;

    }



  }


}
