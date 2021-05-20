class Dustbin
{
    constructor(x, y, width, height) {
      this.image = loadImage("dustbin.png");
      isStatic:false;
      this.body = Bodies.rectangle(x, y, width, height);
      this.x=x;

  this.y=y;
  this.width=width;
  this.height=height;
 

  World.add(world, this.body);


  

}
   display(){
     
  var pos =this.body.position;
  push();
     translate(pos.x,pos.y);
  rectMode(CENTER);
  fill("white");
  rect(pos.x, pos.y, this.width, this.height);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
 pop(); 
}

}