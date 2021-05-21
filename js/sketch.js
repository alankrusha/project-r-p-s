var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var Mhand, rhand, phand, shand;
var rock, paper, sci
var rock1, rock2, paper1, paper2, sci1, sci2;
var rock1Img, rock2Img, paper1Img, paper2Img,sci1Img, sci2Img
var form, player, game;

var check = false;

function preload(){
    rock1Img = loadImage("images/rock1.png");
    rock2Img = loadImage("images/rock2.png");
    paper1Img = loadImage("images/paper1.png");
    paper2Img = loadImage("images/paper2.png");
    sci1Img = loadImage("images/sci1.png");
    sci2Img = loadImage("images/sci2.png");
}

function setup (){
   canvas = createCanvas(displayWidth - 50, displayHeight - 50);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
       clear();
       game.play();
    }
    if(gameState === 2){
        game.end();
    }
    for(var i=0; i>displayHeight; i=i+20){
        strokeWeight(20);
        stroke("black");
        fill("black");
        line(displayWidth/2, i, displayWidth/2, i+20);
    }     
    drawSprites();
}

function rockFunction(){
    //check = true;
    clear();
    Rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
    Rhand.addImage(rock1Img);
    }
    
function paperFunction(){
    clear();
    Phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
    Phand.addImage(paper1Img);
    }
    
function sciFunction(){
    clear();
    Shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
    Shand.addImage(sci1Img);
    }