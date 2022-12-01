
var questions = [
    {
        q: 0,
        question: "What is the capital of Alabama?",
        choices: ["Montgomery", "Tide city", "Santa Fe", "Cheyenne"],
        answer: "Montgomery"
    },
    {
        q: 1,
        question: "What is the capital of Delaware",
        choices: ["Dover", "Salem", "Augusta", "Lansing"],
        answer: "Dover"
    },
    {
        q: 2,
        question: "What is the capital of Illinois",
        choices: ["Springfield", "Olympia", "Pierre", "Raleigh"],
        answer: "Springfield"
    },
    {
        q:3,
        question: "What is the capital of Kentucky",
        choices: ["Frankfort", "Topeka", "Hartford", "Madison"],
        answer: "Frankfort"
    },
    {
        q:4,
        question: "What is the capital of Iowa",
        choices: ["Des Moines", "Concord", "Jackson", "Iowanis"],
        answer: "Des Moines"
    },
    {
        q: 5,
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
// function displayq() {
//     ('questions-container')= questions[0].question }

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
// q=[0]
function questionDisplay(q) {
    // var results= document.getElementById("Results");
    // results[0].innerText= "";
//grabing questioncnt from html
    var quest = document.getElementById("questions-container");
// defiing the text of id we pulled to equal question
    quest.innerText = questions.q[0].question;
    // grbing are anwer slots from html and declaring variable
    var ans1= document.getElementById('ans1');
    var ans2= document.getElementById('ans2');
    var ans3= document.getElementById('ans3');
    var ans4= document.getElementById('ans4');
// giving a value to the elemnts we pulled 
    ans1.innerText = questions.q[0].choices[0]
    ans2.innerText = questions.q[0].choices[1]
    ans3.innerText = questions.q[0].choices[2]
    ans4.innerText = questions.q[0].choices[3]
    
    

    for (let i = 0; i < questions.length; i++) {
      q++;  
        
    }
    if (timer() >=60) {
        
        
    }


}




startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("hide")
    document.getElementById("Gamescreen").classList.add("show")
    timer()
    questionDisplay(q)

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
