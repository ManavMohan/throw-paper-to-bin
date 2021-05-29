class Paper {

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.1

        }
        this.image=loadImage("paper.png")
        this.bodies=Bodies.circle(x,y,radius*8,options)
        this.radius=radius

        World.add(world,this.bodies)
    }
 display(){

    ellipseMode(RADIUS)

     fill("yellow")

    image(this.image,this.bodies.position.x,this.bodies.position.y,this.radius*8,this.radius*8)
 }


}