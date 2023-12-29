//accessing every element of html to perform event and actions on them
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message");

let turnO= true; //playerx playerO
//storing winning patterns in a 2d array
const winPatterns=[ [0,1,2], [3,4,5], [6,7,8] ,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

//for performing some actions while cliccking any of the box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ //player O's turn is there
            box.innerText="O";
            turnO=false;
        }
        else{ //player X's turn is there
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; // so that on clicking again our pattern doesnot change
      
    checkWinner();
    });
});
//to disable all boxes after we get one winner
const disablebox=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
    }
//enable box function for new game
const enableBox=()=> {
     for(let box of boxes){
        box.disabled=true;
        box.innerText="";
     }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
     let pos1val=boxes[pattern[0]].innerText;
     let pos2val=boxes[pattern[1]].innerText;
     let pos3val=boxes[pattern[2]].innerText;
     if(pos1val!=""&& pos2val!="" && pos3val != ""){
        if(pos1val===pos2val && pos2val===pos3val){
           
             showwinner(pos1val);
        }
     }
}
};

//functioning of reset button
const resetGame=()=>{
       turnO=true;
       enableBox();
       msgContainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);
