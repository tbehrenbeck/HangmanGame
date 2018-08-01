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

function startGame () {
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

    // testing/ debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}


   


//-----------main process----------
startGame();