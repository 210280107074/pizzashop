console.log("hiii")
const questions = [
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
    {
        question : "its a quastion",
        options:["option1","option2","option3","option4"],
        answer:"option 1"
    },
];
    const start = document.getElementsByClassName("start");
    const que = document.getElementsByClassName("question");
    const opt1 = document.getElementsByClassName("opt-1"); 
    const opt2 = document.getElementsByClassName("opt-2"); 
    const opt3 = document.getElementsByClassName("opt-3"); 
    const opt4 = document.getElementsByClassName("opt-4"); 

    const selected_option = document.querySelectorAll('input[name="Question"]');
    // const next = document.querySelector("next");

    const index = 0;
    const score = 0;
    
    document.querySelector(".start").addEventListener("click",change_q)
    function change_q(){
        if(questions[index].answer == selected_option.checked){
            score++;
        }
        if(index < 10){
            index++;
            document.querySelector("question").innerHTML = questions[index].question;
            document.querySelector("opt-1").innerHTML = questions[index].options[1];
            document.querySelector("opt-2").innerHTML = questions[index].options[2];
            document.querySelector("opt-3").innerHTML = questions[index].options[3];
            document.querySelector("opt-4").innerHTML = questions[index].options[4];
        }
        if(index == 10){
            console.log(score);
        }
    }





