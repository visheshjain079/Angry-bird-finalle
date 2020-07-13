class Log{
   
    constructor(x,y,height,angle){


        var option={

           restitution:0.8,
           density:1.0,
           friction:2.0,

        }
  
    this.body=Bodies.rectangle(x,y,20,height,option)
    this.height=height;
    this.width=20;
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);


    }

    display(){
   
        var angle=this.body.angle

        
    

    push();
    translate(this.body.position.x,this.body.position.y); 
    rotate(angle);
    
  

    rectMode(CENTER);
    strokeWeight(4);
    stroke("green")
    fill("white");
    rect(0,0,this.width,this.height);
    pop(); 



    }




}