function getComputerChoice()
{
    let a=Math.random();
    if (a<=0.33)
        return "Rock";
    if (a<0.66 && a>0.33)
        return "Paper";
    else
    return "Scissors";
}
let HumanScore=0;
let ComputerScore=0;

    const RockButton = document.querySelector("#Rock");
    RockButton.addEventListener("click", () => { playRound("Rock", getComputerChoice())});
   
    const PaperButton = document.querySelector("#Paper");
    PaperButton.addEventListener("click", () => { playRound("Paper", getComputerChoice())});


    const ScissorsButton = document.querySelector("#Scissors");
    ScissorsButton.addEventListener("click", () => { playRound("Scissors", getComputerChoice())});

function playRound(humanChoice, computerChoice) {
    let ResultMessage='';
    if (humanChoice=="Rock")
    {
                if (computerChoice=="Rock")
        {
            ComputerScore++;
            HumanScore++;
            ResultMessage="It's a Draw";

        }
        else if (computerChoice=="Paper"){
            ComputerScore++;
            ResultMessage="You Lost ! Paper defeats Rock";
        }
        else
            {
                HumanScore++;
                ResultMessage="You Won ! Rock beats Scissors";
            }
        }
    else if (humanChoice=="Paper"){
        if (computerChoice=="Paper")
            {
                ComputerScore++;
                HumanScore++;
                ResultMessage="It's a Draw";
    
            }
            else if (computerChoice=="Scissors"){
                ComputerScore++;
                ResultMessage="You Lost ! Scissors defeats Paper";
            }
            else
                {
                    HumanScore++;
                    ResultMessage="You Won ! Paper beats Rock";
                } 

            }
    else if (humanChoice=="Scissors")
    {     
        if (computerChoice=="Scissors")
            {
                ComputerScore++;
                HumanScore++;
                ResultMessage="It's a Draw";
    
            }
            else if (computerChoice=="Rock"){
                ComputerScore++;
                ResultMessage="You Lost ! Rock defeats Scissors";
            }
            else
                {
                    HumanScore++;
                    ResultMessage="You Won ! Scissors beats Paper";
                }
      }

      else{
        ResultMessage="Invalid Move";
      }
      const ResultScreen=document.querySelector(".result");
                ResultScreen.textContent=ResultMessage;
               
      Gameover();
    }   
        function Gameover(){
            if (HumanScore === 5 || ComputerScore === 5) {
                let finalScore="Game is Over, the Final Score is Human: "+HumanScore+" Computer Score: "+ComputerScore;
                const Messages=document.querySelector(".Total");
                const endMessage=document.createElement("div");
                endMessage.classList.add("GameOverMessage");
                endMessage.textContent=finalScore;
                Messages.appendChild(endMessage);



                
                            
        }
    
    }
 
  

    
