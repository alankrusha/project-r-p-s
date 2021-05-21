class Form{
    constructor(){
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();

    }
    display(){
       this.title = createElement('h1');
       this.title.html("ROCK PAPER SCISSORS");
       this.title.position(displayWidth/2 - 150, displayHeight/2 - 400);

       this.input = createInput("NAME");
       this.input.position(displayWidth/2 - 50, displayHeight/2 - 300);

       this.button = createButton('START');
       this.button.position(displayWidth/2 - 50, displayHeight/2 - 200);

       this.reset = createButton('reset');
       this.reset.position(displayWidth/2 + 200, displayHeight/2 + 200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })




    }
}



