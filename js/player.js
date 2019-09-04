class Player {

    constructor() {
        this.score = 0;
    }

    roll(dice) {
        let roll = dice.roll();                   
        this.score += roll.value;
        return roll; //returns the dice roll
    }
    
}