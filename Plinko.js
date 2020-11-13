class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke("red")
        fill("yellow");
        ellipse(pos.x,pos.y,20);
        
    }
}