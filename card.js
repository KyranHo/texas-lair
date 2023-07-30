const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let attempt = 0;
let flipped = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    //second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.frame === secondCard.dataset.frame) {
        disableCards();
        flipped += 1;
    } else {
        unflipCards();
    }
    setTimeout(() => {
        if (flipped == 6) {
            alert("Yay, you matched all the cards!")
        }
    }, 2000);

}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard()
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));

function reset() {
    location.reload()
}