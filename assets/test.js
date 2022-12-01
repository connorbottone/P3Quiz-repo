var questions = [
    {
        id: 0,

        question: "What is the capital of Alabama?",
        choices: [{ text: "Montgomery", isRight: true },
                  { text: "Tide city", isRight: false },
                  { text: "Santa Fe", isRight: false },
                  { text: "Cheyenne", isRight: false },
                ]
             

    },
    {
        id: 1,

        question: "What is the capital of Delaware",
        choices: [{ text: "Dover", isRight: true },
                  { text: "Salem", isRight: false },
                  { text: "Augusta", isRight: false },
                  { text: "Lansing", isRight: false },
                ]

    },
    // {

    //     question: "What is the capital of Illinois",
    //     choices: ["Springfield", "Olympia", "Pierre", "Raleigh"],
    //     answer: "Springfield"
    // },
    // {

    //     question: "What is the capital of Kentucky",
    //     choices: ["Frankfort", "Topeka", "Hartford", "Madison"],
    //     answer: "Frankfort"
    // },
    // {

    //     question: "What is the capital of Iowa",
    //     choices: ["Des Moines", "Concord", "Jackson", "Iowanis"],
    //     answer: "Des Moines"
    // },
    // {

    //     question: "What is the capital of New Jersey",
    //     choices: ["Trenton", "Newark", "Warren", "Lincoln"],
    //     answer: "Trenton"
    // },
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

//function to display questions
function displayQ(id) {
   
   
   var messageBox= document.querySelector("messageBox");
   messageBox.innerText="";

   var quest = document.getElementById('questions-container');
    // defiing the text of id we pulled to equal question
    quest.innerText = questions[id].question;
    // grbing are anwer slots from html and declaring variable
    var ans1 = document.getElementById('ans1');
    var ans2 = document.getElementById('ans2');
    var ans3 = document.getElementById('ans3');
    var ans4 = document.getElementById('ans4');
    // giving a value to the elemnts we pulled 
    ans1.innerText = questions[id].choices[0].text;
    ans2.innerText = questions[id].choices[1].text;
    ans3.innerText = questions[id].choices[2].text;
    ans4.innerText = questions[id].choices[3].text;

    ans1.value = questions[id].choices[0].isRight;
    ans2.value = questions[id].choices[1].isRight;
    ans3.value = questions[id].choices[2].isRight;
    ans4.value = questions[id].choices[3].isRight;

    var slectionTf= "";
    var id = 0;

    ans1.addEventListener("click",() => {
        
        slectionTf = ans1.value;
        if (selectionTf == "true") {
            messageBox[0].innerText = "Great Job!"
        }
        else if (id < 5) {
            id++;

            
        }
    })
    ans2.addEventListener("click",() => {
        slectionTf = ans2.value;
    })
    ans3.addEventListener("click",() => {
        slectionTf = ans3.value;
    })
    ans4.addEventListener("click",() => {
        slectionTf = ans4.value;
    })




}




startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("hide")
    document.getElementById("Gamescreen").classList.add("show")
    timer()
    displayQ(id)

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