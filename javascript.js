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
function getHumanChoice()
{
    let choice = prompt("Choose Rock,Paper or Scissors");
    if (choice.toUpperCase()=="ROCK")
        return "Rock";
    else if (choice.toUpperCase()=="PAPER")
        return "Paper";
    else if (choice.toUpperCase()=="SCISSORS")
        return "Scissors";
    else
        return "Invalid";
    
}
let HumanScore=0;
let ComputerScore=0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice=="Rock")
    {
        if (computerChoice=="Rock")
        {
            ComputerScore++;
            HumanScore++;
            console.log("It's a Draw");

        }
        else if (computerChoice=="Paper"){
            ComputerScore++;
            console.log("You Lost ! Paper defeats Rock");
        }
        else
            {
                HumanScore++;
                console.log("You Won ! Rock beats Scissors");
            }
        }
    else if (humanChoice=="Paper"){
        if (computerChoice=="Paper")
            {
                ComputerScore++;
                HumanScore++;
                console.log("It's a Draw");
    
            }
            else if (computerChoice=="Scissors"){
                ComputerScore++;
                console.log("You Lost ! Scissors defeats Paper");
            }
            else
                {
                    HumanScore++;
                    console.log("You Won ! Paper beats Rock");
                } 

            }
    else if (humanChoice=="Scissors")
    {     
        if (computerChoice=="Scissors")
            {
                ComputerScore++;
                HumanScore++;
                console.log("It's a Draw");
    
            }
            else if (computerChoice=="Rock"){
                ComputerScore++;
                console.log("You Lost ! Rock defeats Scissors");
            }
            else
                {
                    HumanScore++;
                    console.log("You Won ! Scissors beats Paper");
                }
      }

      else{
        console.log("Invalid Move");
      }
    }
    for (let i=1;i<=5;i++){
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
    }
    console.log("Final Score of Human after 5 rounds is "+HumanScore+" and Final Score of Computer after 5 Rounds is " +ComputerScore);
  