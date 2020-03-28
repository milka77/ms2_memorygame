// Select HTML elements
const date = document.getElementById('date');
const card = document.querySelectorAll('.card');
const footerYear = document.getElementById('year');
const info = document.getElementById('info-msg');
const done = document.getElementById('done-msg');


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
 

// Memory card game
let flippedCard = false;
let firstCard, secondCard;
let gameLock = false;
let pairs = 15;

card.forEach(cards => cards.addEventListener('click', flipOver));

function flipOver(){
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
    if (pairs <= 0){
        win.style.display = 'block';
    }
}

function match(){
    firstCard.removeEventListener('click', flipOver);
    firstCard.classList.add('bg_green');
    secondCard.removeEventListener('click', flipOver);
    secondCard.classList.add('bg_green');
    pairs --;
}

function flipBack() {
    gameLock = true;
    firstCard.classList.add('bg_red');
    secondCard.classList.add('bg_red');
    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('bg_red');
        secondCard.classList.remove('flip');
        secondCard.classList.remove('bg_red');
        gameLock = false;
    }, 1600);
}

function windowClose() {
    win.style.display = 'none';
}

function reset() {
    flippedCard = false;
    firstCard, secondCard = [null, null];
    pairs = 15;
    card.forEach(cards => cards.addEventListener('click', flipOver));
}


