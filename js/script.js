let game = undefined;

let singlePlayerReset = document.getElementById("singlePlayer-reset");
let twoPlayerReset = document.getElementById("twoPlayer-reset");

// add image reset and score reset here
singlePlayerReset.onclick = () => {
    game.resetGame();
    this.score = 0;
}
twoPlayerReset.onclick = () => {
    game.resetGame();
    this.score = 0;
}

// on click stores dice value and adds
let singlePlayerButton = document.getElementById("singlePlayer-roll");    
singlePlayerButton.onclick = () => {
    
    let diceRoll = game.playerTurn(0);
    document.getElementById("singlePlayer-dice").src = diceRoll;
    document.getElementById("singlePlayer-score").innerHTML = game.getPlayerScore(0);      

}

// on click stores dice value and adds
let player1button = document.getElementById("player1-roll");    
player1button.onclick = () => {
    
    if(game.currentTurn == 0) {
        let diceRoll = game.playerTurn(0);
        document.getElementById("player1-dice").src = diceRoll;
        document.getElementById("player1-score").innerHTML = game.getPlayerScore(0);
        document.getElementById("player1-roll").disabled = true;
        document.getElementById("player2-roll").disabled = false;
        document.getElementById("player2").classList.add("current");   
        document.getElementById("player1").classList.remove("current");
    }

}

// on click stores dice value and adds
let player2button = document.getElementById("player2-roll");    
player2button.onclick = () => {
    
    if(game.currentTurn == 1) {
        let diceRoll = game.playerTurn(1);
        document.getElementById("player2-dice").src = diceRoll;
        document.getElementById("player2-score").innerHTML = game.getPlayerScore(1);    
        document.getElementById("player1-roll").disabled = false;
        document.getElementById("player2-roll").disabled = true;
        document.getElementById("player1").classList.add("current");
        document.getElementById("player2").classList.remove("current");
    }

}


// splash container hides elements - game object created with player number based on button pressed
document.getElementById("btnSinglePlayer").addEventListener("click",function() {
    document.getElementById("splash-container").style.display = "none";
    document.getElementById("single-player").style.display = "block";
    game = new Game(1);
});

document.getElementById("btnTwoPlayer").addEventListener("click",function() {
    document.getElementById("splash-container").style.display = "none";
    document.getElementById("two-player").style.display = "block";
    game = new Game(2);
});
