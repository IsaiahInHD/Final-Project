
var m1;
var movers = [];
var attr, repl;
var gamePaused = false;
var sldrAV, sldrRad;
var av, armRadius;
var sldr;


function setup() {
  var cnv = createCanvas(900, 800);
  cnv.position = ((windowWidth - width)/2,30);
  background(22);
  loadMovers(250);
  rectMode(CENTER);
  sldrAV = createSlider(0, 100, 50);
  sldrAV.position(10, 10);
  sldrRad = createSlider(0, 800, 50);
  sldrRad.position(10, 40);

  //m1 = new Mover(random(width), random(height), random(10, 30));
  //m2 = new Mover(random(width), random(height), random(10, 30));
  //m3 = new Mover(random(width), random(height), random(10, 30));
  //m4 = new Mover(random(width), random(height), random(10, 30));
  //m5 = new Mover(random(width), random(height), random(10, 30));

}

function draw() {
    av = sldrAV.value();
    armRadius = sldrRad.value();
    //var val = sldrAV.value(0, 100, 50);
    //var val = sldrRad.value(0, 800, 50);
    //background(val);


  if(!gamePaused){
    fill(119, 0, 3, 80);
    //rect(width/2,height/2, width, height);
    for(var i = 0; i < movers.length; i++){
      movers[i].update();
    }
    //m1.update();
    attr.update();
    //  repl.update();
  }

}

function loadMovers(n){
  for(var i = 0; i < n; i++){
    console.log(i);
    movers.push(new Mover(width/2, height/2, 30, i));
  }
  //m1 = new Mover(300, 300, 3, 30,-3);
  attr = new Mover(300, 300, 3, -1);
  //repl = new Mover(-2);
}

function mouseClicked(){
  gamePaused = !gamePaused;
}
