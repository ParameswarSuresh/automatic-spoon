class Walls{
  constructor(x, y){
    this.body = Bodies.rectangle(x, y, 20, 100);
    this.body.isStatic=true
    this.width = 20;
    this.height = 100;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
}