const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
];

let index = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next").addEventListener("click", change_q);
  });
const radioButtons = document.getElementsByClassName('radio-btn');
// console.log(radioButtons);
function change_q() {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            console.log(radioButton.value); 
            if(radioButton.value ==  questions[index].answer){
                score++;
            }
            break;
        }
    }
   index++;
    if (index < questions.length) {
        document.querySelector(".question").innerHTML = questions[index].question;
        document.querySelector(".opt-1").textContent = questions[index].options[0];
        document.querySelector("#r1").textContent = questions[index].options[0];
        document.querySelector(".opt-2").textContent = questions[index].options[1];
        document.querySelector("#r2").textContent = questions[index].options[1];
        document.querySelector(".opt-3").textContent = questions[index].options[2];
        document.querySelector("#r3").textContent = questions[index].options[2];
        document.querySelector(".opt-4").textContent = questions[index].options[3];
        document.querySelector("#r4").textContent = questions[index].options[3];
    } else {
        document.querySelector(".result").textContent = "Result : "  +score + "/10";
        index = 0;
    }
}
