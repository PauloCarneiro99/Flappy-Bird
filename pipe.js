function Pipe(){
	this.hole = 100;
	this.top = (random() * (height - this.hole)) + 1;
	this.bottom = height - this.top - this.hole;
	this.x = width;
	this.w = 20;
	this.speed = 2;
	this.highlight = false;

	this.show = function(){
		fill(255);
		if(this.highlight == true){
			fill(255, 0, 0);
		}
		rect(this.x, 0, this.w, this.top); 
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}
	this.update = function(){
		this.x -= this.speed;
	}
	this.offscreen = function(){
		if(this.x < -this.w){
			return true;
		}else{
			return false;
		}
	}

	this.hits = function(bird){
		if((bird.y - 16 < this.top || bird.y +16 > height - this.bottom) && (bird.x > this.x && bird.x < this.x + this.w)){
			//this.highlight = true;			
			return true;
		}
	}
}