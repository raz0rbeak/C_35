class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
        form = new Form()
        form.display()
        }
    }
    play(){
        form.hide()
        textSize(30 )
        text("Game Start", 120, 100)
        Player.getPlayersInfo()
            if(allPlayers!= undefined){
                var displayPosition = 120
           
            for(var pl in allPlayers){
                if(pl == "player" + player.index)
                fill("red")
                else
                fill("black")
                displayPosition+=20
                textSize(15)
                text(allPlayers[pl].name+ ":"+ allPlayers[pl].distance, 120, displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=50
            player.update()
        }
    }
}
