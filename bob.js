class bob {
	constructor(x, y, r, options = {}) {
	  this.x = x;
	  this.y = y;
	  this.r = r;
  
	  let defaultOptions = {
		isStatic: false,
		restitution: 1,
		friction: 0,
		density: 0.005, // 默认密度
	  };
  
	  // 合并默认选项和传入的选项
	  let bodyOptions = {...defaultOptions, ...options};
  
	  this.body = Bodies.circle(this.x, this.y, this.r / 2, bodyOptions);
	  World.add(world, this.body);
	}
  
	display() {
	  let pos = this.body.position;
	  push();
	  translate(pos.x, pos.y);
	  fill(255, 0, 255);
	  ellipse(0, 0, this.r, this.r);
	  pop();
	}
  }
  

