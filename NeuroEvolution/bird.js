function Bird(brain) {
	this.y = height/2
	this.x = 40

	this.score = 0
	this.fitness = 0


	this.gravity = 0.6
	this.velocity = 0
	this.lift = -15
	if(brain)
		this.brain = brain.copy()
	else
		this.brain = new NeuralNetwork(4,4,2)
	this.think = function(pipes){
		var closest = null
		var closestD = Infinity
		for(var i = 0; i < pipes.length; i++){
			var aux = (pipes[i].x - this.x)
			if(aux < closestD && aux > 0){
				closest = pipes[i]
				closestD = aux
			} 
		}


		this.inputs = []
		this.inputs[0] = this.y / height
		this.inputs[1] = closest.top / height
		this.inputs[2] = closest.bottom / height
		this.inputs[3] = closest.x / width

		this.output = this.brain.predict(this.inputs)
		if(this.output[0] > this.output[1]){
			this.up()
		}
	}


	this.mutate = function(){
		this.brain.mutate()
	}

	this.getFitness = function(){
		return this.fitness
	}

	this.update = function(){
		this.score++

		this.velocity += this.gravity
		this.velocity *= 0.9
		this.y += this.velocity

		if(this.y > height){
			this.y = height
			this.velocity = 0
		}
		if(this.y < 0){
			this.y = 0
			this.velocity = 0
		}
	}

	this.getScore = function(){
		return this.score
	}

	this.show = function(){
		stroke(255)
		fill(255, 50)
		ellipse(this.x, this.y, 32, 32)
	}

	this.up = function(){
		this.velocity += this.lift
	}
}