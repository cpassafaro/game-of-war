# Game of War
Card Game: War

## Deployed URL
https://cpassafaro.github.io/game-of-war/



## Rules for the game of War:
If you don't know how to play the card game war, read below through line 23. If you know the rules skip down to line 23 for the rules of playing on the computer!

THE DEAL
The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.

THE PLAY
Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.

If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.

HOW TO KEEP SCORE
The game ends when one player has won all the cards.


## These are the specifications of how to interact with the console to play the game!

player entry keys to know:
war.playCard()
war.compareCards()


Set up players. Players have been set up in the app.js file. If you would like to change player names, you can do so on line 9 or 10.


To start the game go the console on the webbrowser. When the browser is loaded the cards have been created via classes, shuffled, and dealt to two players. 

Players can access or look at their decks via their profile. Type in player1.deck or player2.deck. Decks will be displayed.

To start the game, each player must play a card. They can do this at the same time. Enter war.playCard() in the console. The game has begun

The console logs which card each player has played.The cards now need to be compared. To do this the players need to run war.compareCards() in the console.If the players try to play another card before comparing the original cards, then they will be prompted to compare cards before continuting. The winner will be announced on the next line once cards are compared, or a tie will be announced. Each announcement will include how many cards each player has left.

If there is no tie, then after the first round is played through, the players start the next round by running war.playCard() in the console. The players must enter war.compareCards() to compare cards and decide a winner.

If there is a tie, then war is started and played through automatically, three cards are taken from the top of each of the players decks, and put in the winning pot. The 4th card is flipped over and played,  war.compareCards is run automatically and populates the results of the war.


The games checks to see if the players have enough cards to play out a typical round before it begins. There is also another function that checks to see if the players have enough cards when a war declaration happens.


If the players do not have enough cards to continue, the winner is announced and the game ends (because the functions won't work, because of there not being values to repopulate one of the players decks!)

To start a new game refresh the page!



