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
    }
];

let index = 0;
let score = 0;

document.querySelector(".start").addEventListener("click", startQuiz);
document.querySelector(".next").addEventListener("click", change_q);

function startQuiz() {
    document.querySelector(".start").style.display = "none"; // Hide Start button
    change_q(); // Load the first question
}

function change_q() {
    let selected_option = document.querySelector('input[name="Question"]:checked');

    if (selected_option) {
        if (selected_option.value === questions[index].answer) {
            score++;
        }
        selected_option.checked = false; // Reset selection
    }

    index++; // Increment index only once

    if (index < questions.length) {
        document.querySelector(".question").innerHTML = questions[index].question;
        document.querySelector(".opt-1").textContent = questions[index].options[0];
        document.querySelector(".opt-2").textContent = questions[index].options[1];
        document.querySelector(".opt-3").textContent = questions[index].options[2];
        document.querySelector(".opt-4").textContent = questions[index].options[3];

        // Set the radio button values properly
        let radioButtons = document.querySelectorAll('input[name="Question"]');
        radioButtons.forEach((radio, i) => {
            radio.value = questions[index].options[i]; // Assigning values
        });

    } else {
        alert("Quiz completed! Your score: " + score);
    }
}
