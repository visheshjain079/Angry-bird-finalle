class Bird extends BaseClass{

   constructor(x,y,width,height){

      super(x,y,width,height);
      this.image=loadImage("Sprites/bird.png");

      this.smokeImage=loadImage("Sprites/smoke.png");
      this.trijectory=[]



  }

    display(){


   super.display();

   if(this.body.position.x>200 && this.body.velocity.x>10){
     
   var position=[this.body.position.x,this.body.position.y];
   this.trijectory.push(position);
  
                 
   }

   for(var i=0; i<this.trijectory.length;i++){
     image(this.smokeImage,this.trijectory[i][0],this.trijectory[i][1])

   }
          

    }



}