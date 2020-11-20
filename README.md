# War The Card Game
[You can play the game here!](http://warthecardgame.surge.sh/)
## Game Logic 
#### The user can pick how many players are in each game
#### A deck of cards is shuffled, and then split between the number of players selected
#### the players each flip over a card, the player with the highest number wins that round
#### in the event of a tie, then it is war, each player places 3 cards facedown, an flips the fourth card to be compared. The player with the highest card then wins the war. 
#### the same mechanisms go on until one player has all the cards, the player with all of the cards is the winner 
![wireframe](css/warTheGame@2x.png)
![wireframe](css/warTheGame@2x%20(1).png)
![wireframe](css/warTheGame%20-%20Frame@2x.png)
### Pseudocode 
1. Define the required constants
2. Define the cached element references
3. Define the event listeners 
4. Define the required variables used to track the state of the game
5. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant.
6. Upon loading, the app should:
  * Initialize the start of game
  * Wait for the user to click the play button
  * Take in the input on the number of players
  * Create the card deck
  * Shuffle the card deck
  * Equally distribute the cards based on the number of players
7. Handle the conditons for determining a round winner
8. Handle a condition if the cards match
9. If one player has all the cards, they win
10. Handle a player clicking the replay button