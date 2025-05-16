let userscore = 0;
let compscore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore1 = document.querySelector("#user-score");
const userscore2 = document.querySelector("#comp-score")

const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin) {
        userscore++;
        userscore1.innerText = userscore;
        msg.innerText = `you win your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        userscore2.innerText = compscore;
        msg.innerText = `you lose ${computerchoice} beats your choice  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

function compchoice() {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const drowgame = () => {
    msg.innerText = "game drow";
    msg.style.backgroundColor = "yellow";
}
 
const userchoice = (userchoice) => {
    const computerchoice = compchoice();


    if(userchoice === computerchoice) {
        drowgame();
    }else {
        let userwin = true;
        if(userchoice === "rock") {
           userwin = computerchoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
            userwin = computerchoice === "scissors" ? false : true; 
        } else{
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerchoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const  choiceid = choice.getAttribute("id");
        userchoice(choiceid);
    });
});
