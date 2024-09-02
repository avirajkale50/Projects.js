//Project Five
/*
1.In this project we are generating a random no. between 0 to 100 and guessing it
2.Also limiting the number of guesses
3.Showing the previous guess
*/

//creating a romdom int no.

let randomNumber = parseInt(Math.random() * 100 +1)

//collecting the require variable
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}
//checking the validity of the value
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid no.")
    }else if(guess < 1 || guess > 100){
        alert("Please enter a number between 0 to 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over . Random no. Was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
//match the value with random
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guess it right`)
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} / `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`

}
//
function  displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//for start and end of the game

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function name(e) {
     randomNumber = parseInt(Math.random() * 100 +1)
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML = ""
     remaining.innerHTML = `${11-numGuess}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
 
     playGame = true;  
    })
 }