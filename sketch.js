var bird;
var pipes = [];
var placar = 0;
var passaro;
function preload(){
  bk  = loadImage('image/bk.png')
  passaro = loadImage('image/bird.jpg')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(bk);
  bird.update();
  bird.show(passaro);
  if(frameCount % 100 == 0){
  	pipes.push(new Pipe());
  }

  for(var i = pipes.length -1 ; i >= 0 ; i--){
  	pipes[i].show();
  	pipes[i].update();

  	if(pipes[i].hits(bird)){
  		placar = 0;
  		console.log("HIT");
  	}

  	if(pipes[i].offscreen()){
  		if(pipes[i].highlight == false)
  			placar += 1;
  		pipes.splice(i,1);
  	}
  }

}


function mousePressed(){
	bird.up();
}

function keyPressed(){
	if(key == ' '){
		bird.up();
	}
}
