console.log('Welcome to tic-tac-toe')
let audioTurn=new Audio('...')
let bgm=new Audio('...')
let gameover=new Audio('...')
let turn='X'
let isgameover=false;
let noofturns=0;
let reset=document.getElementById('reset')
//function to change the turn
// const startState=()=>{
//     return turn==='X'?'X':"X";
// }
const changeTurn=()=>{
    return turn==='X'?'0':"X";
}


//function to check win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxText');
    console.log(boxtexts)
    let wins=[
        [0,1,2,5,5,0],
        [0,3,6,-5,15,90],
        [0,4,8,5,15,45],
        [2,5,8,15,15,90],
        [2,4,6,5,15,-45],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [1,4,7,5,15,90],
    ]
    wins.forEach((e)=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            isgameover=true;
            document.querySelector('.info').innerText=`Playes ${boxtexts[e[0]].innerText} won`;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='176px'
            let screenWidth=screen.width;
            console.log(screenWidth)
            let a=(screenWidth>=950)?20:40;
            document.querySelector('.line').style.width=`${a}vw`;
            if(a===20){
                document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            }
            else{
                document.querySelector('.line').style.transform=`translate(${e[3]*2}vw,${e[4]*2}vw) rotate(${e[5]}deg)`;
            }
            
        }
        
    })

}

//game logic
const gameLogic=()=>{
    let boxes=document.getElementsByClassName('box')
    let arr=Array.from(boxes)
    arr.forEach((element)=>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',(e)=>{
        if(isgameover===false){
            if(boxtext.innerText===""){
                boxtext.innerText=turn;
                noofturns++;
                turn =changeTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover)
                    document.getElementsByClassName('info')[0].innerText=`Turn for ${turn}`
                if(!isgameover && noofturns===9){
                    document.getElementsByClassName('info')[0].innerText=`Its a tie`
                    reset();
                }
            }
        }
    })
})
}

const resetter=()=>{
    // turn=startState();
    let boxtext=document.querySelectorAll('.boxText');  
    Array.from(boxtext).forEach((element)=>{
        element.innerText=""
    })
    // turn='X';
    // gameLogic()
    turn='X'
    document.getElementsByClassName('info')[0].innerText=`Turn for ${turn}`
    document.getElementsByTagName('img')[0].style.width='0' 
    document.querySelector('.line').style.width='0vw'
    
    isgameover=false;
    noofturns=0
}
gameLogic();
//adding onclick listener tor reset button
reset.addEventListener('click',resetter);
    

