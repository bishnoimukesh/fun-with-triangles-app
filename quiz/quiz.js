const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-ans-btn");
const outputs = document.querySelector("#output");

const correctAnswers = ["90", "right angled"];

submitAnsBtn.addEventListener("click", function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is : " + score;
})