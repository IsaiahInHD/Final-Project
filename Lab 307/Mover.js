function Mover(x,y,r, id) {
  this.loc = createVector(x, y);
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.acc = createVector(-2, 2);
  this.w = 20;
  this.id = id;
  this.angle = 0;
  this.clrR = random(255);
  this.clrG = random(255);
  this.clrB = random(255);
  this.rad = random(222);
  this.angleVelocity = 0.1;
  this.angle = random(TWO_PI)

  this.rad = r;


  this.update = function(){
    if(this.loc.dist(attr.loc) < 200){
      this.acc = p5.Vector.sub( this.loc, attr.loc);
      this.acc.normalize();
      this.acc.mult(0.025);
      this.vel.add(this.acc);
      this.angleVelocity = av/1000
      this.rad = random(222);
      this.angle += this.angleVelocity;
    }


    this.vel.limit(2);
    this.loc.add(this.vel);
    this.checkEdges();
    this.render();

  }

  this.checkEdges = function(){
    if(this.loc.x < 0 || this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0 || this.loc.y > height) this.vel.y = -this.vel.y;
    //if(this.loc.x > width ) this.loc.x = 0;
    //if(this.loc.x < 0 ) this.loc.x = width;
    //if(this.loc.y > height ) this.loc.y = 0;
    //if(this.loc.y < 0 ) this.loc.y = height;

  }

  this.render = function(){


    stroke(this.clrR, this.clrG, this.clrB);
    line(this.loc.x  ,this.loc.y  ,attr.loc.x  , attr.loc.x );

    if(this === attr){
      //fill(0, 0, 255);
      //rect(this.loc.x, this.loc.y, this.w, this.w)
    }


  }

}
