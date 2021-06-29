class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //loading image
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
        
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            push();
            stroke("#301608");

            if(pointA.x < 270){

                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
            line(pointA.x - 20,pointA.y,pointB.x + 30,pointB.y - 5);

            image(this.sling3,pointA.x - 25,pointA.y - 10,15,30);

            }  
            else{

                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
            line(pointA.x - 20,pointA.y,pointB.x + 30,pointB.y - 5);

            image(this.sling3,pointA.x + 25,pointA.y - 10,15,30); 
            }
            pop();
            
        }

        image(this.sling1,200,20);
        image(this.sling2,170,20);
    }
    
}