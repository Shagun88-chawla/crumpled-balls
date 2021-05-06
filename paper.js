class Paper{
   constructor(x,y,radius){
    var options={
        restitution:0.5,
        friction: 0.5,
        density:1
    }
    this.radius = radius
    this.body = Bodies.circle( x, y, radius, options);
    World.add(world, this.body);
}

display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse( 0, 0, this.radius, this.radius);
    pop();
  }
}