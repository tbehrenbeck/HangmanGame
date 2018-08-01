//---------global variables-------

//arrays and variables to hold data
var wordOptions = ["hola", "hello", "aloha", "bonjour"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // _ _ m m _ _
var wrongLetter = [];

var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;

//--------------functions----------

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // reset
    guessesLeft = 9;
    wrongLetter = [];
    blanksAndSuccesses = [];

    //create blanks and successes
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //change HTMl to reflect conditions
    $("#wordToGuess").html(blanksAndSuccesses.join(" "));
    $("#numGuesses").html(guessesLeft);
    $("#winCounter").html(winCount);
    $("#loseCounter").html(loseCount);

    // testing/ debugging
    // console.log(selectedWord);
    // console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
}

function checkLetter(letter) {
    var isLetterInWord = false
    console.log(letter);
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }


//check where in the word the letter is, then populate letter & take out blank
if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }

    }
} else {
    wrongLetter.push(letter);
    guessesLeft--;
}
console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + "| Loss Count: " + loseCount + "| Guesses Left: " + guessesLeft);

    //update HTML
    $("#numGuesses").html(guessesLeft);
    $("#winCount").html(winCount);
    $("#lossCounter").html(loseCount);
    $("#wordToGuess").html(blanksAndSuccesses.join(" "));
    $("#wrongGuesses").html(wrongLetter.join(" "));

    // check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won");

        //update html page
        $("#winCounter").html(winCount);
        startGame();
    }
    // check if user lost
    else if (guessesLeft == 0){
        loseCount++;
        alert("You lost");

         //update html page
         $("#lossCounter").html(loseCount);
         startGame();
    }
}
//-----------main process----------
startGame();

//register key code
document.onkeyup = function (event) {
    var letterGussed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    checkLetter(letterGussed)
    roundComplete();

    //testing/debug
    console.log(letterGussed);
}