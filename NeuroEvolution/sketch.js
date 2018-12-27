var total = 500;
var bird = [];
var pipes = [];
var savedBirds = [];
var cont = 0;
var slider;
var sliderQtdPassaros
var bestScore = 0

function setup() {
  createCanvas(400, 600);
  slider = createSlider(1, 100, 1)
  sliderQtdPassaros = createSlider(1, 100, 500)
  for(var i=0; i<total; i++){
    bird[i] = new Bird();
  }
  document.getElementById("geracao").innerHTML = "Numero de geracoes : " + 1;
  document.getElementById("bestScore").innerHTML = "Best Score : " + bestScore;
  document.getElementById("BirdsAlive").innerHTML = "Birds alive in this generation : " + 500;
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
	  var aux = bird[0].getScore();
	  document.getElementById("score").innerHTML = "Score : " + aux;
	  document.getElementById("BirdsAlive").innerHTML = "Birds alive in this generation : " + bird.length

	  for(var i = pipes.length -1 ; i >= 0 ; i--){
	  	pipes[i].show();
	  	pipes[i].update();

	    for(var j=bird.length-1; j>=0; j--){
	      if(pipes[i].hits(bird[j])){
	        savedBirds.push(bird.splice(j, 1)[0]); //delete birds with colision
	      }
	    }

	  	if(pipes[i].offscreen()){
	  		pipes.splice(i,1);
	  	}

	    if(bird.length == 0){
	       if(aux > bestScore){
	       	bestScore = aux
  			document.getElementById("bestScore").innerHTML = "Best Score : " + bestScore;
	       }
	       total = sliderQtdPassaros.value()
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