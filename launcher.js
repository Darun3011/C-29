class Launcher{

    constructor(stone,pointB){
        var options ={
            bodyA: stone,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
    
        } 
        this.launcher = Matter.Constraint.create(options);
        World.add(world,this.launcher);
        
        
    
    }
    
    display(){
    
        strokeWeight(5);
    
        
        if(this.launcher.bodyA){
            
            line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y);
    
        }
    
        }
    
    fly() {
       
     this.launcher.boy = null;
        
    }
    
    }