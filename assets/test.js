var messageBox = document.querySelector("#messageBox");
var quest = document.getElementById('questions-container');
var startGame = document.querySelector("#start-game")
var container = document.querySelector("#Answers");
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var highScores = document.querySelector("#highScores");
var leaderboard = document.querySelector('#leaderBoard')

var questions = [
    {
        question: "What is the capital of Alabama?",
        choices: ["Montgomery", "Santa Fe", "Tide City", "Cheyenne"],
        answer: "Montgomery"
    },
    {
        question: "What is the capital of Delaware",
        choices: ["Lansing", "Salem", "Augusta", "Dover"],
        answer: "Dover"
    },
    {
        question: "What is the capital of Illinois",
        choices: ["Olympia", "Springfield", "Pierre", "Raleigh"],
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
var time = 60
var interval;
var questionNumber = 0;
var highScore;
var score = 0;

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
// function nextQ() {

//     questions++;
//     for (let i = 0; i < questions.length; i++) {


//     }
// }

//         


//         questions++;
//     for (let i = 0; i < questions.length; i++) {
//         const element = questions[i];
//     });

//     }
//function to display questions
function displayQ() {
    var wR = questions[questionNumber].answer;
    
    // defiing the text of id we pulled to equal question
    quest.textContent = questions[questionNumber].question;
    // grbing are anwer slots from html and declaring variable

    // giving a value to the elemnts we pulled 
    ans1.textContent = questions[questionNumber].choices[0];
    ans2.textContent = questions[questionNumber].choices[1];
    ans3.textContent = questions[questionNumber].choices[2];
    ans4.textContent = questions[questionNumber].choices[3];
    console.log(wR)
}
function checkCorrectAndIncrementQuestion(userSuppliedAnswer) {
    console.log(userSuppliedAnswer);
    if (userSuppliedAnswer === questions[questionNumber].answer) {
        // user selected the correct answer
        console.log('correct choice')
        messageBox.textContent="Correct answer good job"
        score++
        console.log(score)
    } else {
        // they chose wrong
        console.log('wrong answer');
        messageBox.textContent="Wrong answer"
        //TODO acutally more stuff here
        time= time - 10
    }
    questionNumber++;
    if (questionNumber < questions.length) {
        // theres still more questions to display
        displayQ()
    } else {
        endGame()
    }

}
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initals = localStorage.getItem("initals");
  
  

  if (!initals) {
    return;
  }

  highScores.textContent = ("initals :"+initals).concat("  Score of : " + score );
 console.log(highScores.textContent)
}

function endGame() {
    document.getElementById("Gamescreen").classList.remove("show")
    document.getElementById("Gamescreen").classList.add("hide")
    document.getElementById("GameoverScreen").classList.remove("hide")
    document.getElementById("GameoverScreen").classList.add("show")
   
    clearInterval(interval)
    console.log(time)
    localStorage.setItem("time",time)
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
      
        var initals = document.querySelector("#initals").value;
      
      
        if (initals === "") {
          displayMessage("error", "No entrey has been made");
        }
        else if (initals.length > 2) {
          displayMessage("error", "Plese enter Just yout initals")
        }
         else {
          displayMessage("success", "Highscore saved");
      
          localStorage.setItem("initals", initals);
         
          renderLastRegistered();
        }
      });
      

}
leaderboard.addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("highScore").classList.remove("hide")
    document.getElementById("highScore").classList.add("show")
    document.getElementById("Quiz-content").classList.remove("show")
    document.getElementById("Quiz-content").classList.add("hide")
    document.getElementById("Gamescreen").classList.remove("show")
    document.getElementById("Gamescreen").classList.add("hide")
    document.getElementById("GameoverScreen").classList.remove("show")
    document.getElementById("GameoverScreen").classList.add("hide")
    clearInterval(interval)
})
exitHighscoreButton.addEventListener("click", function (event) {
    
    
    window.location.reload()
})

ans1.addEventListener("click", function (event) {
    event.preventDefault()
    var userChoice = event.target.textContent; // maybe .textContent
    console.log(userChoice)
    checkCorrectAndIncrementQuestion(userChoice);
    
 })
 ans2.addEventListener("click", function (event) {
    event.preventDefault()
    var userChoice = event.target.textContent; // maybe .textContent
    console.log(userChoice)
    checkCorrectAndIncrementQuestion(userChoice);
    
 })
 ans3.addEventListener("click", function (event) {
    event.preventDefault()
    var userChoice = event.target.textContent; // maybe .textContent
    console.log(userChoice)
    checkCorrectAndIncrementQuestion(userChoice);
    
 })
 ans4.addEventListener("click", function (event) {
    event.preventDefault()
    var userChoice = event.target.textContent; // maybe .textContent
    console.log(userChoice)
    checkCorrectAndIncrementQuestion(userChoice);
    
 })

startGame.addEventListener("click", function (event) {
    event.preventDefault()

    document.getElementById("Quiz-content").classList.remove("show")
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







