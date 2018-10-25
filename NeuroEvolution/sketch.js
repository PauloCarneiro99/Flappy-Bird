var total = 250;
var bird = [];
var pipes = [];
var savedBirds = [];
var placar = 0;
var cont = 0;
function setup() {
  createCanvas(400, 600);
  for(var i=0; i<total; i++){
    bird[i] = new Bird();
  }
}

function draw() {
  background(0);
  
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

    // for(var j=0; j<total; j++){
    // 	if(pipes[i].hits(bird[j])){
    // 		placar = 0;
    // 		console.log("HIT");
    // 	}
    // }

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