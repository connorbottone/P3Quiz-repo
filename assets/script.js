
var questions = [
    {

        question: "What is the capital of Alabama?",
        choices: ["Montgomery", "Tide city", "Santa Fe", "Cheyenne"],
        answer: "Montgomery"
    },
    {

        question: "What is the capital of Delaware",
        choices: ["Dover", "Salem", "Augusta", "Lansing"],
        answer: "Dover"
    },
    {

        question: "What is the capital of Illinois",
        choices: ["Springfield", "Olympia", "Pierre", "Raleigh"],
        answer: "Springfield"
    },
    {

        question: "What is the capital of Kentucky",
        choices: ["Frankfort", "Topeka", "Hartford", "Madison"],
        answer: "Frankfort"
    },
    {

        question: "What is the capital of Iowa",
        choices: ["Des Moines", "Concord", "Jackson", "Iowanis"],
        answer: "Des Moines"
    },
    {

        question: "What is the capital of New Jersey",
        choices: ["Trenton", "Newark", "Warren", "Lincoln"],
        answer: "Trenton"
    },
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

        } else {
            time--

        }
    }, 1000);

}

// function questionDisplay() {

//  ('#questions-container')= questions[0].question 

//  for (let i = 0; i < questions.length; i++) {

//     const bttn = document.createElement('button')
//     bttn.setAttribute('class', "btn-prm");
//     bttn.textContent = choices[i]
//     answer.append(abv)


//  }

function questionDisplay() {

    for (let i = 0; i <= questions.length; i++) {
        questions[0]++;
    }
    if (timer() >= 60) {


    }
    // making a varible quest
    var quest = document.getElementById('questions-container');
    // defiing the text of id we pulled to equal question
    quest.innerText = questions[0].question;
    // grbing are anwer slots from html and declaring variable
    var ans1 = document.getElementById('ans1');
    var ans2 = document.getElementById('ans2');
    var ans3 = document.getElementById('ans3');
    var ans4 = document.getElementById('ans4');
    // giving a value to the elemnts we pulled 
    ans1.innerText = questions[0].choices[0]
    ans2.innerText = questions[0].choices[1]
    ans3.innerText = questions[0].choices[2]
    ans4.innerText = questions[0].choices[3]


}




startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("hide")
    document.getElementById("Gamescreen").classList.add("show")
    timer()
    questionDisplay()

    // display()
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
