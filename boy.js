class Boy{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.animation = loadAnimation("proc41images/images/Walking Frame/walking_1.png","proc41images/images/Walking Frame/walking_2.png","proc41images/images/Walking Frame/walking_3.png","proc41images/images/Walking Frame/walking_4.png","proc41images/images/Walking Frame/walking_5.png","proc41images/images/Walking Frame/walking_6.png","proc41images/images/Walking Frame/walking_7.png","proc41images/images/Walking Frame/walking_8.png");
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        animation(this.animation, 0, 0, this.width, this.height);
        pop();
      }
}