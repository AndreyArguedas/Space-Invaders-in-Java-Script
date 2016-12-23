function Enemy(){
  this.x = random(width - 30);
  this.y = random(25);
  this.r = 15;
  this.velocity = 1;

  this.show = function(){
    imageMode(CENTER)
    image(enemyImg,this.x, this.y);
  }

  this.move = function(){
    var direction = floor(random(2));
    if(direction == 0){
      this.y += this.velocity;
      this.x -=this.velocity + 5;
      if(this.x <= 0)
        this.x +=5;
    }
    if(direction == 1){
      this.y += this.velocity;
      this.x +=this.velocity + 5;
      if(this.x >= width)
        this.x -=5;
    }
  }


}
