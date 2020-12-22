class mango{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Plucking mongoes/mango.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        wWorld.add(world, this.body);
    }


}