/* Function for roll & array image based on number generated -1*/
// dont add anything here - dice roll only
class Dice {
    
    constructor() {
        this.images = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"];
    }

    roll() {
        let randomNumber = Math.floor(Math.random() * 6 ) + 1;

        return {

            value : randomNumber,
            imagePath : this.images[randomNumber-1],
            
        };
    }

}
