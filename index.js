const message = document.querySelector(".message");
const number = document.querySelector(".num");
const guessButton = document.querySelector(".guess");
const restartButton = document.querySelector(".restart");
const chances = document.querySelector(".chances");
const emoji = document.querySelector(".emoji");
var randomNumber;
start();




var score = 3;


guessButton.addEventListener("click", function(){
        var guessedNumber = Number(number.value);
        console.log(guessedNumber);

        if(!guessedNumber){
            alert("Please enter a number");
        }
        else if(guessedNumber === randomNumber){
            message.textContent = "Hurrey! You guessed it";
            emoji.textContent = "😊";
            guessButton.style.display = "none";
        }else{
            guessedNumber>randomNumber? (message.textContent = "Think Low" ):( message.textContent = "Think High");
            score--;

            chances.textContent = score;
        }

        if(score ===0){
            message.textContent = "Game Over";
            emoji.textContent = "😢";
            number.value = '';
           // alert("You have to restart the game.");
           guessButton.style.display = "none";

        }
        })

function start(){
    randomNumber = Math.floor(Math.random() * 10)+1;
    number.value = '';
    score = 3;
    chances.textContent = score;
    message.textContent = "I will help You";
    guessButton.style.display = "inline-block";
    emoji.textContent = "👦";

    


console.log(randomNumber);
}