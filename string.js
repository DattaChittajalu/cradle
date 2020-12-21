class String{
    constructor(bodyA,pointB){
        var opitions={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB=pointB
        this.string=Constraint.create(opitions)
        World.add(world, this.string)
    }
    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
        }
    
}