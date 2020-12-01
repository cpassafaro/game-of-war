class Player {
    constructor(name, deck){
        this.name = name;
        this.deck = deck;
        this.playedCard = [];
    }
}
//input players here
const player1 = new Player('Jessi', [], [])

const player2 = new Player('Christina', [], [])
//this class is called upon in the class of deck, it is the object that each card is built off of
 class Card {
     constructor(suit, rank, value){
         this.suit = suit;
         this.rank = rank;
         this.value =value;
     }
 }


 class Deck {
     constructor(cards){
         this.cards = cards;
         this.createDeck()
     }
     createDeck(){
        //internal information for cards and loops within function, not the way you try to access card properties outside
        let deck =[];
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14];
        for(let i=0; i< suits.length; i++){
            for(let j=0; j <cards.length; j++){
                let card = new Card (suits[i], cards[j], value[j])
                deck.push(card)
            }
        }
        this.cards = deck;
     }

     shuffleDeck(){
        var ctr = this.cards.length, temp, index;

        // While there are elements in the array
            while (ctr > 0) {
        // Pick a random index
                index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
                ctr--;
        // And swap the last element with it
                temp = this.cards[ctr];
                this.cards[ctr] = this.cards[index];
                this.cards[index] = temp;
            }
            return this.cards;
     }

     dealCards(){
         //not sure why it needs to loop twice to deal out the correct amount of cards
        for(let i = 0; i < this.cards.length; i++){
            for(let j=0; j <this.cards.length; j++){
                // player1.this.deck.push(cards.shift());
                // player2.this.deck.push(cards.shift());
                let firstDeck = this.cards.shift(0,25);
                let secondDeck = this.cards.shift(26,51);
                // console.log(halfDeck)
                player1.deck.push(firstDeck);
                player2.deck.push(secondDeck)
                
            }
                // player1.deck.push(cards.shift());
        
            }
            return (player1.deck, player2.deck) 
        }
    }

class WarGames {
    constructor(round){
        this.playedCards =[];
        this.winnerPot =[];
        this.round = round;
    }
    playCard(){
        // let player1PlayedCard = player1.playedCard;
        // let player2PlayedCard = player2.playedCard;
        if(player1.playedCard.length == 1 && player2.playedCard.length == 1){
            alert(`Compare the played cards before continuing!`)
        }else{

        let player1PlayedCard = player1.playedCard;
        let player2PlayedCard = player2.playedCard;
            
        player1PlayedCard.push((player1.deck.shift()));
        player2PlayedCard.push((player2.deck.shift()));
        console.log(`Round ${this.round++} :${player1.name} played the ${player1PlayedCard[0].rank} of ${player1PlayedCard[0].suit} and ${player2.name} played the ${player2PlayedCard[0].rank} of ${player2PlayedCard[0].suit}.`)
        // this.compareCards();
        }
    }
    compareCards(){
        //to get the cards to push into the array, without being saved in another array I had to declare the index of each one
        if(player1.playedCard[0].value > player2.playedCard[0].value){
            this.winnerPot.push(player1.playedCard[0], player2.playedCard[0])
            player1.deck.push(...this.winnerPot);
            player1.playedCard = [];
            player2.playedCard = [];
            this.winnerPot = [];
            console.log(`${player1.name} won! ${player1.name} has ${player1.deck.length} cards left, and ${player2.name} has ${player2.deck.length} cards left`) 
            this.cardCheckForNormalRound()      
        }else if (player2.playedCard[0].value > player1.playedCard[0].value){
            this.winnerPot.push(player1.playedCard[0], player2.playedCard[0])
            player2.deck.push(...this.winnerPot)
            player1.playedCard = [];
            player2.playedCard = [];
            this.winnerPot =[];
            console.log(`${player2.name} won! ${player2.name} has ${player2.deck.length} cards left, and ${player1.name} has ${player1.deck.length} cards left`)
            this.cardCheckForNormalRound()
        }else{
            this.winnerPot.push(player1.playedCard[0], player2.playedCard[0])
            player1.playedCard = [];
            player2.playedCard = [];
            console.log(`its a tie`)
            this.cardCheckForWar()
            this.declareWar()
        }      
    }
    declareWar(){
        //push three cards from each players deck into the winner pot
        let playerOneArr = player1.deck.splice(0,3);
        let playerTwoArr = player2.deck.splice(0,3);
        this.winnerPot.push(...playerOneArr);
        this.winnerPot.push(...playerTwoArr);
        //play a card from each players hand
        war.playCard();
        war.compareCards();
    }
    cardCheckForWar(){
        //players must have at least 4 cards left for a war/tie, this checks that, if they don't have enough cards they lose!
        if(player1.deck < 4){
            alert(`${player1.name} is the winner!`)
        }else if (player2.deck < 4){
            alert(`${player2.deck} is the winner!`)
        }    
    }
    cardCheckForNormalRound(){
        //checking to see if players are out of cards completely
        if(player1.deck == 0 ){
            console.log(`${player2.name} won! ${player1.name} doesn't have any more cards`);
        }else if (player2.deck == 0){
            console.log(`${player1.name} won! ${player2.name} doesn't have any more cards`)

        }
    }
}




//these are decarled here so that the game is ready to go as soon as the page is reloaded
//need instances of classes to call our functions to start game
const deck = new Deck;
const war = new WarGames(1);

//shuffles deck on page refresh
deck.shuffleDeck()
//deals cards out to players when page refreshed
deck.dealCards()