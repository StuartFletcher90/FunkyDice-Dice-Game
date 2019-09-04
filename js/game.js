class Game {

    constructor(playerCount) {
        
        this.playerCount = playerCount;
        this.resetGame();


    }
// this is called when a player pushes the roll button
    playerTurn(pId) {

        //only allow turn if current turn is correct
        if(this.currentTurn == pId) {
            this.round++;
            let player = this.players[pId];
            let playerRoll = player.roll(this.dice);
            
            if(playerRoll.value == 1) {
                this.gameOver = true;
                alert("Player " + (pId+1) + " loses");
            }

            if(player.score >= 20) {
                this.gameOver = true;
                alert("Game Over");
            }

            this.nextTurn();
            return playerRoll.imagePath;
        }
        
    }

    resetGame() {
        this.round = 0;
        this.currentTurn = 0;
        this.players = [];
        for(let i = 0; i < this.playerCount; i++) {
            this.players[i] = new Player();
        }
        this.gameOver = false;
        this.dice = new Dice();
    }

    //this is called after a player presses the button
    nextTurn() {

        //increase player turn
        this.currentTurn++;
        
        //if player turn is higher than maxmimum number of players, reset to 0
        if(this.currentTurn > (this.players.length-1))
            this.currentTurn = 0;

    }

// gets the score of a player (we pass the variable)
    getPlayerScore(pId) {

        let player = this.players[pId];
        return player.score;
    }
    
}