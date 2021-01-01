var gameState=0,playerCount=0,form,game,player
var database,allPlayers

function setup(){
    database=firebase.database() //to create database
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
}


function draw(){
    background("yellow");
   if(playerCount===4){
       game.update(1)
   }
   if(gameState===1){
game.play()

   }
    drawSprites();
}

 




