function Bullet(x,y){
  this.x = x;
  this.y = y;
  this.r = 21;

  this.show = function(){
    imageMode(CENTER)
    image(bulletImg, this.x, this.y)
  }

  this.move = function(){
    this.y -= 9;
  }

  this.hits = function(objective){
    var distance = dist(this.x,this.y,objective.x,objective.y);
    if(distance < this.r + objective.r)
      return true;
    return false;
  }

}
