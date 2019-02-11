var nroGeracoes = 1

function nextGeneration(){
	nroGeracoes++
	document.getElementById("geracao").innerHTML = "Numero de geracoes : " + nroGeracoes

	calculateFitness()
	for(var i=0; i< total; i++){
		bird[i] = pickOne()	
	}
	savedBirds = [] //limpando as geracoes passadas
}

//Aqui escolhe os melhores passaros
function pickOne(){
	var index = 0
	var r = random(1)

	while(r > 0){
		r = r - savedBirds[index].getFitness()
		index++
	}
	index--

	var b = savedBirds[index]
	var child = new Bird(b.brain)
	child.mutate()
	return child
}



function calculateFitness(){
	var sum = 0
	for(var b of savedBirds){
		sum += b.score
	}

	for(var b of savedBirds){
		b.fitness += b.score/sum
	}
}

function getGeracao(){
	return nroGeracoes
}