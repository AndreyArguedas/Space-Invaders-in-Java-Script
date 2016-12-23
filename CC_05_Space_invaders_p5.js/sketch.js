var mainCharacter; //The shooter
var enemy;
var img;
var enemyImg;
var bulletImg;
var enemies = [];
var bullets = [];
var gameOver = false;
var backg;

function preload(){
  img = loadImage("images/shooter.png");
  enemyImg = loadImage("images/enemy0.png");
  bulletImg = loadImage("images/bullet0.png");
  backg = loadImage("images/background.jpg");
}

function setup(){
  createCanvas(640,380);
  mainCharacter = new Shooter();
  generateNewEnemies();
}

function draw(){
  background(0);
  image(backg,0,0);
  mainCharacter.show();
  for(var i = 0; i < enemies.length; i++ ){
    enemies[i].show();
    enemies[i].move();
    if(enemies[i].y >= height){
      gameOver = confirm("YOU LOOSE :( .... Do you want to play again?")
      restartGame()
    }
  }
    for(var i = 0; i < bullets.length; i++ ){
      bullets[i].show();
      bullets[i].move();
      for(var j = 0; j < enemies.length;j++){
        if(bullets[i].hits(enemies[j]))
          enemies.splice(j,1);
        }
      if(bullets[i].y < -5)
        bullets.splice(bullets[i],1);
    }

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW)
      mainCharacter.move(1);
  if(keyCode === LEFT_ARROW)
    mainCharacter.move(-1);
  if(key === ' ')
    bullets.push(new Bullet(mainCharacter.x,height));
}

function restartGame(){
    location.reload();
}

function generateNewEnemies(){
  for(var i = 0; i < 7; i++ )
    enemies.push(new Enemy());
  setTimeout(generateNewEnemies,4500);
}
