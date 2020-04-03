// Select HTML elements
const date = document.getElementById('date');
const card = document.querySelectorAll('.card');
const footerYear = document.getElementById('year');
const info = document.getElementById('info-msg');
const done = document.getElementById('done-msg');
const clickNr = document.getElementById('clicks');
const winMsg = document.getElementById('win-msg');


// Show todays date
const options = {day:'numeric', weekday:'long', month:'long'};
const currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);

// Show current year in the footer
footerYear.innerHTML = currentDate.getFullYear();

// Player name
function playerName() {
    var name = document.getElementById('name-input').value;

    if (name != null) {
        document.getElementById('player').innerHTML = `Welcome ${name}, and have fun.`;
    }
}
 

// Memory card game logic
let flippedCard = false;
let firstCard, secondCard;
let gameLock = false;
let pairs = 15;
let clicks = 0;

card.forEach(cards => cards.addEventListener('click', flipOver));
shuffle();

function flipOver() {
    if (gameLock) return;
    if (this === firstCard) return;
    
    this.classList.add('flip');

    if (!flippedCard) {
        // The first click, card
        flippedCard = true;
        firstCard = this;
        
    } else {
        // The second click, card
        flippedCard = false;
        secondCard = this;
        
        // Checking cards match? 
        
        if (firstCard.dataset.carddata === secondCard.dataset.carddata) {
            // It's a match
           match()

        } else { 
            // Not a match
          flipBack()
        }
    }

    // Show the end game screen 
    if (pairs <= 0) {
        done.style.display = 'block';
        clickNr.innerHTML = clicks + " clicks";
        
        //Win message depends on the click score
        winMessage()
    }
}

// Matching cards 
function match() {
    firstCard.removeEventListener('click', flipOver);
    firstCard.classList.add('bg_green');
    secondCard.removeEventListener('click', flipOver);
    secondCard.classList.add('bg_green');
    pairs --;
    clicks += 2;   
}

// Not matching cards
function flipBack() {
    gameLock = true;
    firstCard.classList.add('bg_red');
    secondCard.classList.add('bg_red');
    clicks += 2;
    
    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('bg_red');
        secondCard.classList.remove('flip');
        secondCard.classList.remove('bg_red');
        gameLock = false;
    }, 1600);
}

// Checking with how many clicks completed the game and give a message
function winMessage() {
    if (clicks >= 30 && clicks <= 50) {
            winMsg.innerHTML = 'Legendary!';
        } else if (clicks >= 51 && clicks <= 65) {
            winMsg.innerHTML = 'King of the game!';
        } else if (clicks >= 66 && clicks <= 80) {
            winMsg.innerHTML = 'Marvelous!';
        } else if (clicks >= 81 && clicks <= 90) {
            winMsg.innerHTML = 'Awesome!';
        } else if (clicks >= 91 && clicks <= 105) {
            winMsg.innerHTML = 'Nice one!';
        } else if (clicks >= 106 && clicks <= 120) {
            winMsg.innerHTML = 'Good job!';
        } else if (clicks > 120) {
            winMsg.innerHTML = 'You can do it better!';
        }
}

// Closing on click the info and done windows 
function windowClose() {
    info.style.display = 'none';
    done.style.display = 'none';
}    

// Card shuffle
function shuffle() {
    card.forEach(cards => {
        let randomPosition = Math.floor(Math.random() * 30);
        cards.style.order = randomPosition;
    })
}

// Display the number of clicks the game was completed
clickNr.innerHTML = clicks + " clicks";


// Reset the game, new game
function reset() {
    setTimeout(() => {
        flippedCard = false;
        [firstCard, secondCard] = [null, null];
        pairs = 15;
        clicks = 0;
        card.forEach(cardReset => cardReset.classList.remove('flip'));
        card.forEach(cardBg => cardBg.classList.remove('bg_green'));
        // Remove the red background in that case when the user start a new game
        // while a not matched pair is stil not flipped back.  
        card.forEach(cardBg => cardBg.classList.remove('bg_red'));
        shuffle();
        card.forEach(cards => cards.addEventListener('click', flipOver));
        }, 800);
        // For the case the player don't close the game finished window.
        windowClose();  
    }