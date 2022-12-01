
const questions = [
    {
        question: "What is the capital of Alabama?",
        choices: ["Montgomery", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "What is the capital of Delaware",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "What is the capital of Illinois",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }

]

var useranswer = ""
var correctAnswer = ""
var time = 60
var interval
var questionNumber = 0
var highScore = 0



var startGame = document.querySelector("#start-game")
var container = document.querySelector("#Answers");

function timer() {
    interval = setInterval(() => {
        document.getElementById("Timer").textContent = `Time: ${time}`
        if (time <= 0) {
            clearInterval(interval)
            //game over//

        } else {time--

        }
    }, 1000);

}
// function display(array) {
//     if (questionNumber<= array.length ) {
//      correctAnswer = array[questionNumber].answer  
//      document.querySelector("#questions-container").textContent= array[questionNumber].question
//      var choices= array[questionNumber].choices
//      for (let i = 0; i < choices.length; i++) {
        
//         const abv = document.createElement('button')
//         abv.setAttribute('class', "btn-prm");
//         abv.textContent = choices[i]
//         answer.append(abv)
//         // const ele = choices[i];
//         //a
//         //
        
//      }
//     } else {
        
//     }
    

startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("hide")
    document.getElementById("Gamescreen").classList.add("show")
timer()
    // if (element.matches(".ans")) {
    //     var state = element.getAttribute("data-state");


    //     if (state === "hidden") {

    //         element.textContent = element.dataset.number;

    //         element.dataset.state = "visible";

    //     } else {

    //         element.textContent = "";

    //         element.setAttribute("data-state", "hidden")

    //     }
    // }

});