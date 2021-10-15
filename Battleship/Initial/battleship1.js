    

// Postion of ship
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// Game init

var guess;
var hits = 0;
var guesses =0;
var isSunk = false ;


// Loop

while (isSunk == false){


    // Asking for input guess
    guess = prompt('Ready , aim , fire! (enter a number from 0-6):');

    
    //  Checking validity of the guess
    if (guess < 0 || guess > 6){
        alert('Enter a valid number!');
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3){
            alert('HIT!');
             
            hits = hits + 1;
        } else{
            alert('MISS!');
        }
        if(hits == 3){
            isSunk = true;
            alert('You sank my battleship!');

        }
    }

}


// User Stats

var stats = 'You took ' + guesses + ' to sink the battleship, ' + 'which means your accuracy is ' + (3/guesses); 

alert(stats);



