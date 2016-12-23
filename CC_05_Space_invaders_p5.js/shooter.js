function Shooter(){
  this.x = width/2;
  this.show = function() {
    image(img,this.x,height-50)
  }

  this.move = function(dir){
      this.x += dir*30;
  }

}
