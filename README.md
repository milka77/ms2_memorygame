# "FIA WEC" JavaScript memory game
Milestone Project #2: Interactive Frontend Development - Code Institute

This project is an FIA WEC (World Endurance Championship) themed interactive JavaScript memory game. 

Link to the the live site: [here](https://milka77.github.io/ms2_memorygame/)

---

## UX

### User Stories
* The user should be read the rules and info about the game at the welcome screen. They should be able to run the game with a simple click on the "Let's play!" button. 
* The user should see the current date and day at the top left corner in the header. 
* The user should be able to optionally enter her/his name at the top right corner in the header to receive a personalised greeting like: "Welcome [name of the palyer], and have fun.".
* The user should see an FIA WEC themed background picture on both sides of the game. 
* The user should be able to click any of the cards which are facing down (not flipped already) to flip it over and try to find the right pairs. 
* The user should be able to find pairs with clicking on the cards. If they clicked two cards and these cards are the same, they match, the background of the card become green and stay flipped, if they don't match the background of the card become red and turning back. 
* The user should not be able to click on a new card till the two already flipped over cards which are not matching and not turned back. 
* The user should be receiving an interactive message at the end of the game when all pairs found depends on how many clicks were used to find all the pairs. The messages and the click ranges are the following:

  | Clicks    | |      Messages        |
  |:--------: |-|:-----------:         |
  | 30 - 50   |-|  Legendary!          |
  | 51 - 65   |-| King of the game!    |
  | 66 - 80   |-| Marvelous!           |
  | 81 - 90   |-| Awesome!             |
  | 91 - 105  |-| Nice one!            |
  | 106 - 120 |-| Good job!            |
  | 120 +     |-| You can do it better!|
* The user should be able to close the pop up screen at the end of the game with a click on the "Hurray!" button. 
* The user should be able to start a new game anytime during the game by clicking the "New Game" button on the middle of the header, they don't need to wait till the game is finished. 

### Wireframe 
Picture 1 

---
## Features
### Existing Features
* Player name - allows users to enter their name and receive a personalised greetings.
* Memory Game - allows users to click on the cards and play with the game. 
* New Game - allows users to start a new game anytime. 

### Features Left to Implement
* Timed game - which shows the user how long they played with the game.
* Highscore table - allows teh user to see other users score and time. 

---
## Technologies Used
* HTML
* CSS
* JavaScript
* [Google Fonts](https://fonts.google.com)
* GNU Image Manipulating Program - [GIMP](http://www.gimp.org)
* [Bootstrap 4](https://getbootstrap.com/)

---
## Testing
### Testing All Functions
* Function playername: 


### Code Validation
* Validated the HTML code with [W3C](https://validator.w3.org/#validate_by_input) and no error found.
* Validated the CSS code with [W3C](https://jigsaw.w3.org/css-validator/#validate_by_input) and no error found.

## Deployment
This project is hosted using GitHub pages, deployed from the master branch. The site will update automatically upon new commits to the master branch. To deploy the project correctly on GitHub pages, the landing site must he named *index.html*

If you want run the project locally you need to clone the repository directly into your favorite editor by writing to the terminal the following: `git clone https://github.com/milka77/ms2_memorygame.git`. 

---
## Media 
All pictures and logos are from [FIA WEC](https://www.fiawec.com) and used for educational purposes only.