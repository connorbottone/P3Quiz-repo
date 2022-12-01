 //     question:'What is the capital of Alabama?',
    //     answers: ['Montgomery', correct:true]
    //         [ '', correct:false],
    //         [ '', correct:false],
    //         text: '', correct:false}
    //     ]
    // } 
     
    {
        // question:'What is the capital of Delaware',
        // answers: [
        //     {text:'', correct:false },
        //     {text: 'Dover', correct:true},
        //     {text: '', correct:false},
        //     {text: '', correct:false},
        // ]
    }
    {
        // question:'What is the capital of Illinois',
        // answers: [
        //     {text:'Springfield', correct:true },
        //     {text: '', correct:false},
        //     {text: '', correct:false},
        //     {text: '', correct:false},
        // ]
    }
    // {
    //     question:'What is the capitol of Kentucky',
    //     answers: [
    //         {text:'', correct:false },
    //         {text: '', correct:false},
    //         {text: '', correct:false},
    //         {text: 'Frankfort', correct:true},
    //     ]
    // }
    // {
    //     question:'What is the  ',
    //     answers: [
    //         {text:'', correct:true },
    //         {text: '', correct:false},
    //         {text: '', correct:false},
    //         {text: '', correct:false},
    //     ]
    // }






    <div id="Answers" class="hidden button-layout">
            <!-- <button class="ans" data-state="hidden">ans1 </button>
            <button class="ans" data-state="hidden">asn2</button>
            <button class="ans" data-state="hidden">ans3</button>
            <button class="ans" data-state="hidden">ans4</button> -->
        </div>



for (let i = 0; i < choises.length; i++) {
    //create buttons
    const answerButton = document.createElement("button");
    //add classes, including class "answer" which will be used for selecting later
    answerButton.setAttribute("class", "btn btn-primary m-4 answer");
    //add values to the buttons
    answerButton.textContent = choises[i];
    //append buttons to answers container
    answersContainer.append(answerButton);
  }


  