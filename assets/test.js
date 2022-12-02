var questions = [




    {

        question: "What is the capital of Alabama?",
        choices: ["Montgomery", "Santa Fe", "Tide City", "Cheyenne"],
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
function nextQ() {

    questions++;
    for (let i = 0; i < questions.length; i++) {


    }
}

//         


//         questions++;
//     for (let i = 0; i < questions.length; i++) {
//         const element = questions[i];
//     });

//     }
//function to display questions
var wR = questions[0].answer;
function displayQ() {


    var messageBox = document.querySelector("messageBox");

    var quest = document.getElementById('questions-container');
    // defiing the text of id we pulled to equal question
    quest.innerText = questions[0].question;
    // grbing are anwer slots from html and declaring variable
    var ans1 = document.getElementById('ans1');
    var ans2 = document.getElementById('ans2');
    var ans3 = document.getElementById('ans3');
    var ans4 = document.getElementById('ans4');
    // giving a value to the elemnts we pulled 
    ans1.innerText = questions[0].choices[0];
    ans2.innerText = questions[0].choices[1];
    ans3.innerText = questions[0].choices[2];
    ans4.innerText = questions[0].choices[3];
    


    console.log(wR)

ans1.addEventListener("click", function(event){
var x =useranswer;
console.log(x)
    if (useranswer === wR){
       messageBox="great job"
        questions++
        for (let i = 0; i < questions.length; i++) {
            
            
        }
    }
else 
messageBox = "thats incorrect"
questions++
        for (let i = 0; i < questions.length; i++) {
            
            
        }


}

);



}


startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("hide")
    document.getElementById("Gamescreen").classList.add("show")
    timer()
    displayQ()

  
});

    // } (questions.length < 6) {

    // }// if (user.choice == questions.choices[0]) {
    //         messageBox.innerText = "great job"

    //     }startGame.addEventListener("click", function (event)

    //     }
    //         else if (selectionTf == "true") {
    //         messageBox.innerHTML = "OH Sorry thats incorrect"
    //         questions[id++];
    //         time = time - 10;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }


    //     }




    // })
    // }
    // ans2.addEventListener("click", () => {

    //     slectionTf = ans2.value;
    //     if (selectionTf == "true") {
    //         messageBox.innerHTML = "Great Job!"

    //         questions[id]++;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }
    //     }
    //     else if (selectionTf == "true") {
    //         messageBox.innerHTML = "OH Sorry thats incorrect"
    //         questions[id++];
    //         time = time - 10;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }


    //     }




    // })
    // ans3.addEventListener("click", () => {

    //     slectionTf = ans3.value;
    //     if (selectionTf == "true") {
    //         messageBox.innerHTML = "Great Job!"

    //         questions[id]++;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }
    //     }
    //     else if (selectionTf == "true") {
    //         messageBox.innerHTML = "OH Sorry thats incorrect"
    //         questions[id++];
    //         time = time - 10;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }


    //     }




    // })
    // ans4.addEventListener("click", () => {

    //     slectionTf = ans4.value;
    //     if (selectionTf == "true") {
    //         messageBox.innerHTML = "Great Job!"

    //         questions[id]++;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }
    //     }
    //     else if (selectionTf == "true") {
    //         messageBox.innerHTML = "OH Sorry thats incorrect"
    //         questions[id++];
    //         time = time - 10;
    //         for (let i = 0; i < questions.length; i++) {
    //             const element = questions[i];

    //         }


    //     }




    // })


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







