class Wall{
  constructor(x, y){
    this.body = Bodies.rectangle(x, y, 200, 20);
    this.body.isStatic=true
    this.width = 200;
    this.height = 20;
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
