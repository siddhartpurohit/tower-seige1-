class Box {
  constructor(x, y, width, height) {
    var options = {
      //isStatic:true,
      //isStatic:true,
        'restitution':0,
        'friction':0.1,
        'density':0.1
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255
    
    World.add(world, this.body);
  }
  display(){
    
    
    
    if(this.body.speed<5){
     
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("green");
      rect(0, 0, this.width, this.height);
      pop()
    }
    else
    {
     
      World.remove(world, this.body);
      push();
      
      this.visibility = this.visibility -3;
      //rect(this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
};
