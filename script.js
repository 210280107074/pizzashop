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
    // document.getElementById("start").addEventListener("click",start);
});
function start(){
    document.querySelector("#card").style.display = "block";
    document.querySelector("#start").style.display = "none";

    change_q();
}


document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll('input[name="radio"]');

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
            console.log("Selected option:", radio.value);
            radioButtons.forEach(rb => rb.disabled = true);
            triggerEvent(radio.value,radio.id); 
        });
    });
});

function triggerEvent(selectedValue,id) {
    if(selectedValue == questions[index].answer){
        document.querySelector(`label[for="${id}"]`).style.color = "green";
        score++;
    }
    else{
        console.log("FALSE");
        document.querySelector(`label[for="${id}"]`).style.color = "red";
        labels = document.querySelectorAll("label");
        labels.forEach((label)=>{
            if(label.textContent == questions[index].answer){
                label.style.color = "green";
            }
        })
    }

document.querySelector(".result").innerHTML = "result : "+score+"/"+index;
}
const radioButtons = document.querySelectorAll('input[name="radio"]');
function change_q(){
    if(index < questions.length){
        radioButtons.forEach(radio => radio.checked = false);
    labels = document.querySelectorAll("label");
    labels.forEach(label => label.style.color = "black");
    radioButtons.forEach(rb => rb.disabled = false);
    index++;
    document.querySelector(".question").innerHTML = questions[index].question;
    document.querySelector(".opt-1").textContent = questions[index].options[0];
    document.querySelector("#r1").value = questions[index].options[0];
    document.querySelector(".opt-2").textContent = questions[index].options[1];
    document.querySelector("#r2").value = questions[index].options[1];
    document.querySelector(".opt-3").textContent = questions[index].options[2];
    document.querySelector("#r3").value = questions[index].options[2];
    document.querySelector(".opt-4").textContent = questions[index].options[3];
    document.querySelector("#r4").value = questions[index].options[3];
    }
    else{
        index = 0;
    }
    
}





