var total = 500;
var bird = [];
var pipes = [];
var savedBirds = [];
var placar = 0;
var cont = 0;
var slider;

function setup() {
  createCanvas(400, 600);
  slider = createSlider(1, 100, 1)
  for(var i=0; i<total; i++){
    bird[i] = new Bird();
  }
}

function draw() {  
  for(var n =0; n < slider.value(); n++){
	  if(cont % 100 == 0){
	  	pipes.push(new Pipe());
	  }

	  for(var i=0; i<bird.length ; i++){
	    bird[i].think(pipes);
	    bird[i].update();
	    bird[i].show();
	  }

	  //document.getElementById("placar").innerHTML = placar;

	  for(var i = pipes.length -1 ; i >= 0 ; i--){
	  	pipes[i].show();
	  	pipes[i].update();

	    for(var j=bird.length-1; j>=0; j--){
	      if(pipes[i].hits(bird[j])){
	        savedBirds.push(bird.splice(j, 1)[0]); //delete birds with colision
	      }
	    }

	  	if(pipes[i].offscreen()){
	  		if(pipes[i].highlight == false)
	  			placar += 1;
	  		pipes.splice(i,1);
	  	}

	    if(bird.length == 0){
	       nextGeneration();
	       cont = 0;
	       pipes = []
	       pipes.push(new Pipe());
	    }
	  }
	  cont++;
	}
  background(0);  
  for(var i=0; i<bird.length ; i++){
    bird[i].show();
  }
  for(var i = pipes.length -1 ; i >= 0 ; i--){
  	pipes[i].show();
  }
}