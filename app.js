document.addEventListener('DOMContentLoaded', () => {

    //card options
    const CARD_ARRAY = [{
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },

        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },

        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },

        {
            name: 'pizza',
            img: 'images/pizza.png'
        },

        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    const GRID = document.querySelector('.grid');
    var card_chosen = [];
    var card_chosen_id = [];
    var card_won = [];

    function createBoard() {
        for (let i = 0; i < CARD_ARRAY.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipCard);
            GRID.appendChild(card);
        }
    }

    //check for matches function
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const OPTION_ONE_ID = card_chosen_id[0];
        const OPTION_TWO_ID = card_chosen_id[1];
        if (card_chosen[0] === card_chosen[1]) {
            alert('You found a match');
            cards[OPTION_ONE_ID].setAttribute('src', 'images/white.png');
            cards[OPTION_TWO_ID].setAttribute('src', 'images/white.png');
            card_won.push(card_chosen);
        } else {
            cards[OPTION_ONE_ID].setAttribute('src', 'images/blank.png');
            cards[OPTION_TWO_ID].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again')
        }
    }

    // flip your card function
    function flipCard() {
        var card_id = this.getAttribute('data-id');
        card_chosen.push(CARD_ARRAY[card_id].name);
        card_chosen_id.push(card_id);
        this.setAttribute('src', CARD_ARRAY[card_id].img);
        if (card_chosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();








})