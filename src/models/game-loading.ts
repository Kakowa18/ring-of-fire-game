export class GameLoading {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public currentCard: string | undefined;

    constructor() {
        for(let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }
        shuffle(this.stack);
    }
}

function shuffle(array: any) {
    let currendIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currendIndex) {
        randomIndex = Math.floor(Math.random() * currendIndex);
        currendIndex -= 1;

        temporaryValue = array[currendIndex];
        array[currendIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}