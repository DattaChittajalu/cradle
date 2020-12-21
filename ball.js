class Ball{
    constructor(x,y){
        this.body=Bodies.circle(x,y,60,{density:1,frictionAir:0.005, isStatic:false, restitution:1,friction:1,slop:1,inertia:Infinity})
        this.radius=60
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill("red")
        stroke(10)
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius)
    }
}