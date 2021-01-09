class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("corona.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed < 8){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

        
      }
      else
      {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visiblity);
        image(this.image,0,0,this.width,this.height);
        pop();
        
      }
    }
}