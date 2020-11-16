# War The Card Game
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
  * Initialize the state variables
  * Render those values to the page
  * Wait for the user to click the play button
5. Handle the conditons for determining a round winner
6. Handle a condition if the cards match
7. If one player has all the cards, they win
8. Handle a player clicking the replay button