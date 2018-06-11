

var wins = 0;
var remain = 15;
var guessedCoreect = [];
//var guessedInCoreect = [];
var currentWord;
var win = 0;
var words = [
    'statement',
    'function',
    'variable',
    'framework',
    'terminal',
    'object'
];

function getWord(array, max) { //Get random word
    this.array = array;
    this.max = max;
    var min = 0;
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return array[random];
}

function resetField() { //Reset all fields to start game
    remain = 15;
    document.getElementById('remaincount').innerHTML = remain;
    document.getElementById('guessedcount').innerHTML = '';
    document.getElementById('wordcount').innerHTML = '';
    document.getElementById('winscount').innerHTML = win;
    guessedInCoreect = [];
    //guessedCoreect = [];
}

    start.onclick = function() {

        resetField();
        currentWord = getWord(words, words.length-1);
        console.log(currentWord);
        setWordField(currentWord);

        document.onkeypress = function(e) {
            var key = e.key;
            check(key);
        }
    }



function check(key) {
   
   if (key >= 'a' && key <= 'z') {
       var str = currentWord;

        for (var i = 0; i < str.length; i++) {
            if (str[i] === key) {
                    showUp(key, i);
                    isCompleted();
                }
            if (!str.includes(key)) {
                    alreadyUsedIncorrect(key);
            }
        }
    }     
} 

function setWordField(currentWord) {
    for (var i = 0; i < currentWord.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.setAttribute("id", i);
        newSpan.setAttribute("class", "wordspan");
        var dash = document.createTextNode("_" + " ");
        newSpan.appendChild(dash);
        var element = document.getElementById("wordcount");
        element.appendChild(newSpan);
    }

}

function youWin() {
   alert('Win! Congrats!');
   winsUp();
}

function youLose() {
   alert('Try again!');
}

function showUp(key, index) {
   document.getElementById(index).innerText = key.toUpperCase();
}

function isCompleted() {
    var completed = document.getElementsByClassName('wordspan');
    var completedWord = '';
    for (var i = 0; i < completed.length; i++){
        completedWord = completedWord + completed[i].innerText;
    }
    if (completedWord.toLowerCase() === currentWord) {
        youWin();
    }
}

// Not in use
// function alreadyUsedCorrect(key) {
//     if (!guessedCoreect.includes(key)) {
//         guessedCoreect.push(key);
//         console.log(guessedCoreect.length + " size correct");
//         return true;
//     }
//     else return false;
// }

function alreadyUsedIncorrect(key) {
    if (!guessedInCoreect.includes(key)) {
        guessedInCoreect.push(key)
        console.log(guessedInCoreect.length + " size incorrect");
        guessesRemainingDown();
        for (var i = 0; i < guessedInCoreect.length; i++){
            document.getElementById('guessedcount').innerText = guessedInCoreect.toString().toUpperCase();
        }
    }
}


function guessesRemainingDown() {
    remain--;
    document.getElementById('remaincount').innerHTML = remain;
    if (remain === 0) {
        youLose();
    }
}
function winsUp() {
    win++;
    document.getElementById('winscount').innerHTML = win;
}