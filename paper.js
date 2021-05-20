class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
        restitution:0.6,
        friction:0.7,
        density:1.2,
    }
    this.x=x;
    this.y=y;
    this.height=100;
    this.width=100;

    this.r=5;
    this.image=loadImage("paper.png")
    this.image.scale=0.1

    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);

    }
    display()

    {
        var paperpos=this.body.position;
        console.log(paperpos.x,paperpos.y);
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(1);
        fill("white");
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height,this.r);
        pop()
    }
}
