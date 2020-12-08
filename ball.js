
class ball{
  constructor(x, y, width, height,angle) {
      var options = {
          
          'frictionAir':0.005,
          'density':10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("yellow");
      ellipse( 0, 0, this.width, this.height);
      pop();
    }
}
