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

function change_q() {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            console.log(radioButton.value); 
            if(radioButton.value ==  questions[index].answer){
                score++;
            }
            
        }
    }
   index++;
    if (index < questions.length) {
        document.querySelector(".question").innerHTML = questions[index].question;
        document.querySelector(".opt-1").textContent = questions[index].options[0];
        document.querySelector("#r1").value = questions[index].options[0];
        document.querySelector(".opt-2").textContent = questions[index].options[1];
        document.querySelector("#r2").value = questions[index].options[1];
        document.querySelector(".opt-3").textContent = questions[index].options[2];
        document.querySelector("#r3").value = questions[index].options[2];
        document.querySelector(".opt-4").textContent = questions[index].options[3];
        document.querySelector("#r4").value = questions[index].options[3];
        document.querySelector(".result").textContent = "Result : "  +score + "/" + index;
    } else {
        index = 0;
    }
}

function start(){
    console.log("hiiii");
    document.getElementById("card").style.display = "block";
    document.querySelector(".question").innerHTML = questions[0].question;
        document.querySelector(".opt-1").textContent = questions[0].options[0];
        document.querySelector("#r1").value = questions[0].options[0];
        document.querySelector(".opt-2").textContent = questions[0].options[1];
        document.querySelector("#r2").value = questions[0].options[1];
        document.querySelector(".opt-3").textContent = questions[0].options[2];
        document.querySelector("#r3").value = questions[0].options[2];
        document.querySelector(".opt-4").textContent = questions[0].options[3];
        document.querySelector("#r4").value = questions[0].options[3];
}
