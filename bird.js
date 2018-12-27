function Bird() {
	this.y = height/2;
	this.x = 40;

	this.gravity = 0.6	;
	this.velocity = 0;
	this.lift = -15;

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.show = function(passaro){
		// fill(255);
		// ellipse(this.x, this.y, 32, 32);
		image(passaro, this.x, this.y, 50, 50)
	}

	this.up = function(){
		this.velocity += this.lift;
	}
}