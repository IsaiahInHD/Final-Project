

function particleSystem(loc, clr){
  this.particles = [];
  this.loc = loc;
  this.clr = clr;

  this.addParticle = function(){
     this.particles.push(new Particle(this.loc, this.clr));
  };

  this.run = function(){
     for(var i = this.particles.length-1; i >=0; i--){
       var p = this.particles[i];
       p.update();
       if (p.isDead()) {
         this.particles.splice(i, 1);
       }

     }

  }



}
