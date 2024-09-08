let rules = document.getElementById('rules');
rules.addEventListener("click", () => {
    rules.style.height = "100%";
})

let p_small = document.getElementById("p_small")
p_small.addEventListener("click", () => {
    rules.style.height = "63.6px";
})

let play_again = document.getElementById("play_again");
play_again.addEventListener("click", () =>{
    window.location.reload()
})


let rock_button = document.getElementById("rock_button");
let paper_button = document.getElementById("paper_button");
let scissors_button = document.getElementById("scissors_button");
let show_result = document.getElementById("show_result");
let player_score = document.getElementById("player_score");
let computer_score = document.getElementById("computer_score");
let yourTotalScore = document.getElementById("yourTotalScore")
let computer_shoose = document.getElementById("computer_shoose")


let user_score = 0;
let comp_score = 0;
let user_shoose = "";
let turn = 1;

rock_button.addEventListener("click", () => {
    if (turn <= 5) {
        user_shoose = "rock";
        computerRandom();
        if (computerChoosen == "rock") {
            show_result.innerText = "match Drow";
            user_score++;
            comp_score++;
            player_score.innerHTML = ` ${user_score}`;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "paper") {
            show_result.innerText = "Computer Won! Paper beats Rock";
            comp_score++;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "scissors") {
            show_result.innerText = "You Won! Rock beats Scissors";
            user_score++;
            player_score.innerHTML = ` ${user_score}`;
        }

    if (turn == 5) {
        show_result.innerHTML = " ";
        if (user_score == comp_score) {
            yourTotalScore.innerHTML = `Both have won`
        }else if (user_score > comp_score) {
            yourTotalScore.innerHTML = `Congratulations💐 You won the Game`
        }else{
            yourTotalScore.innerHTML = `Opps!😔 You Lost the Game`
        }
    }    
    }
    turn++;
})

paper_button.addEventListener("click", () => {

    if (turn <= 5) {
        user_shoose = "paper";
        computerRandom();
        if (computerChoosen == "paper") {
            show_result.innerText = "match Drow";
            user_score++;
            comp_score++;
            player_score.innerHTML = ` ${user_score}`;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "scissors") {
            show_result.innerText = "Computer Won! Scissors beats Paper";
            comp_score++;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "rock") {
            show_result.innerText = "You Won! Paper beats Rock";
            user_score++;
            player_score.innerHTML = ` ${user_score}`;
        }
        if (turn == 5) {
            show_result.innerHTML = " ";
            if (user_score == comp_score) {
                yourTotalScore.innerHTML = `Both have won`
            }else if (user_score > comp_score) {
                yourTotalScore.innerHTML = `Congratulations💐 You won the Game`
            }else{
                yourTotalScore.innerHTML = `Opps!😔 You Lost the Game`
            }
        }  
    }
    turn++;
})

scissors_button.addEventListener("click", () => {

    if (turn <= 5) {
        user_shoose = "scissors";
        computerRandom();
        if (computerChoosen == "scissors") {
            show_result.innerText = "match Drow";
            user_score++;
            comp_score++;
            player_score.innerHTML = ` ${user_score}`;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "rock") {
            show_result.innerText = "Computer Won! Rock beats Scissors";
            comp_score++;
            computer_score.innerHTML = ` ${comp_score}`;
        } else if (computerChoosen == "paper") {
            show_result.innerText = "You Won! Scissors beats Paper";
            user_score++;
            player_score.innerHTML = ` ${user_score}`;
        }
        if (turn == 5) {
            show_result.innerHTML = " ";
            if (user_score == comp_score) {
                yourTotalScore.innerHTML = `Both have won`
            }else if (user_score > comp_score) {
                yourTotalScore.innerHTML = `Congratulations💐 You won the Game`
            }else{
                yourTotalScore.innerHTML = `Opps!😔 You Lost the Game`
            }
        }  
    }
    turn++;
})



function computerRandom() {
    let comp = Math.floor(Math.random() * 3);
    console.log(comp)
    computerChoose(comp)
}

let computerChoosen = "";
function computerChoose(computerRandom) {
    if (computerRandom === 0) {
        computerChoosen = "rock";
        computer_shoose.innerHTML = "Computer choose: "+computerChoosen;
        console.log(computerChoosen)
    } else if (computerRandom === 1) {
        computerChoosen = "paper";
        computer_shoose.innerHTML = "Computer choose: "+computerChoosen;
        console.log(computerChoosen)
    }
    else if (computerRandom === 2) {
        computerChoosen = "scissors";
        computer_shoose.innerHTML = "Computer choose: "+computerChoosen;
        console.log(computerChoosen)
    }
}
