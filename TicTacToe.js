let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".para");

let turnO = true;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((Box)=>{
    Box.addEventListener("click",()=>{
        console.log("Box Was Clicked");
        if(turnO){//player O
            Box.innerText ="O";
            turnO=false;
        }else{//Player X 
            Box.innerText="X";
            turnO=true;
        }
        Box.disabled=true;

        checkWinner();
    });
});
const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const resetGame = ()=>{
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const showWinner = (WINNER)=>{
    msg.innerText = `Congratulation The Winner Is ${WINNER}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}
const checkWinner = ()=>{
    for(let patterns of winningPatterns){
       // console.log(patterns);
       
       let pos1val = boxes[patterns[0]].innerText;   
       let pos2val = boxes[patterns[1]].innerText;
       let pos3val = boxes[patterns[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
       if(pos1val===pos2val && pos2val===pos3val){
          console.log("WINNER"+pos1val); 
          showWinner(pos1val);
          break;
       }
    }
}
resetbtn.addEventListener("click",resetGame); 
}