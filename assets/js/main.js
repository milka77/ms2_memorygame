// Select HTML elements
let date = document.getElementById('date');
let card = document.querySelectorAll('.card');

// Show todays date
let options = {day:'numeric', weekday:'long', month:'long',};
let currentDate = new Date();

date.innerHTML = currentDate.toLocaleDateString('en-US', options);

// Memory card game
let flippedCard = false;
let firstCard, secondCard;
let gameLock = false;

function flipOver(){
    if (gameLock) return;
    
    this.classList.add('flip');

    if(!flippedCard){
        // The first click, card
        flippedCard = true;
        firstCard = this;
        console.log('im the first card', flippedCard, firstCard);
    }else{
        // The second click, card
        flippedCard = false;
        secondCard = this;
        console.log('im the second card', flippedCard, secondCard);
        // Checking cards match? 
        console.log(firstCard.dataset.carddata);
        console.log(secondCard.dataset.carddata);
        if(firstCard.dataset.carddata === secondCard.dataset.carddata){
            // It's a match
            firstCard.removeEventListener('click', flipOver);
            firstCard.classList.add('bg_green');
            secondCard.removeEventListener('click', flipOver);
            secondCard.classList.add('bg_green');
        }else{ 
            // Not a match
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
    }
}


function reset(){
    flippedCard = false;
    firstCard, secondCard = [null, null];
    card.forEach(cards => cards.addEventListener('click', flipOver));
}
 card.forEach(cards => cards.addEventListener('click', flipOver));
