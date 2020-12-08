class rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:100

          }
           this.Chain=Constraint.create(options);
          this.pointB=pointB
          World.add(world,this.Chain)
      
    }
    attach(body){
        this.Chain.bodyA=body     
    }
    fly(){
    this.Chain.bodyA=null;
    }
    display(){
        if(this.Chain.bodyA){

        
        strokeWeight(2)
    stroke("brown")
    push();
  
    line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    pop();
        }

    }
    
}
