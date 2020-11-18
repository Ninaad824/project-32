class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution : 0.4

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   this.visiblity=255
   World.add(world, this.body);
  }
   
  score(){
    if(this.visiblity<0 && this.visiblity>-100){
      score++
    }
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.angle)
      rectMode(CENTER);
      fill("pink");
      rect(0,0, this.width, this.height);
      pop()}
    else{

      World.remove(world, this.body);
      push();
      this.visiblity=this.visiblity-5
      pop();



    }

    
  }
};
