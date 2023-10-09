
//          Ahnaf's Codde
//          IG : @ahnaf.rahmn
//          G-mail : ahnaf.rahmn@gmail.com

//==================================================================>>>
let gridBox = document.querySelector('.container2'),
msgBox = document.querySelector('.msg1'),
p1 = document.querySelector('.btn1'),
p2 = document.querySelector('.btn2'),
p3 = document.querySelector('.btn3'),
p4 = document.querySelector('.btn4'),
p5 = document.querySelector('.btn5'),
p6 = document.querySelector('.btn6'),
p7 = document.querySelector('.btn7'),
p8 = document.querySelector('.btn8'),
p9 = document.querySelector('.btn9'),

winX = document.querySelector('.turnOfX'),
winO = document.querySelector('.turnOfO'),
turn_of_X = true,

win_line_1 = document.querySelector('.line1'),
win_line_2 = document.querySelector('.line2'),
win_line_3 = document.querySelector('.line3'),
win_line_4 = document.querySelector('.line4'),
win_line_5 = document.querySelector('.line5'),
win_line_6 = document.querySelector('.line6'),
win_line_7 = document.querySelector('.line7'),
win_line_8 = document.querySelector('.line8'),

arrFor_X = [],
arrFor_O = []

winner = 'X', draw=true;


const arrLine = [ win_line_1, win_line_2, win_line_3, win_line_4, win_line_5, win_line_6, win_line_7, win_line_8 ];
const CheckArr = [ false, false, false, false, false, false, false, false, false ];
const btnArr = [ p1, p2, p3, p4, p5, p6, p7, p8, p9 ];

//========================================================>>>>>>>>


for(let i=0; i<btnArr.length; i++){
    const tmpbtn = btnArr[i];
    tmpbtn.addEventListener('click', function() {
        tmpbtn.classList.add('buttonClicked');
        if(!CheckArr[i]){
            if(turn_of_X){
                tmpbtn.innerHTML = 'X';
                arrFor_X.push(i)
                CheckArr[i]=true;
                turn_of_X = false;
                let tmpVar = checkWin(arrFor_X);
                winner = 'X';
                winLine(tmpVar);
            } else{
                tmpbtn.innerHTML = 'O';
                arrFor_O.push(i)
                CheckArr[i]=true;
                turn_of_X = true;
                let tmpVar = checkWin(arrFor_O);
                winner = 'O';
                winLine(tmpVar);
            }
        }
        checkTurn();
    })
}

function checkTurn(){
    if(turn_of_X){
        winX.classList.add('bright')
        winO.classList.remove('bright')
    } else{
        winX.classList.remove('bright')
        winO.classList.add('bright')
    }
    if(arrFor_O.length + arrFor_X.length == 9 && draw==true){
        sleep(400).then(() => {
            alert("It's a DRAW!!");
            location.reload();
        });
        
    }
}
checkTurn();

// this function checks if its a win
function checkWin(arr){
    arr.sort();
    if(arr.includes(0) && arr.includes(3) && arr.includes(6)){
        return 'win1';
    } else if(arr.includes(1) && arr.includes(4) && arr.includes(7)){
        return 'win2';
    } else if(arr.includes(2) && arr.includes(5) && arr.includes(8)){
        return 'win3';
    } else if(arr.includes(0) && arr.includes(1) && arr.includes(2)){
        return 'win4';
    } else if(arr.includes(3) && arr.includes(4) && arr.includes(5)){
        return 'win5';
    } else if(arr.includes(6) && arr.includes(7) && arr.includes(8)){
        return 'win6';
    } else if(arr.includes(0) && arr.includes(4) && arr.includes(8)){
        return 'win7';
    } else if(arr.includes(2) && arr.includes(4) && arr.includes(6)){
        return 'win8';
    } else{
        return 'x'
    }
}

// this function is for the winning line after someone wins
function winLine(tmpVar){
    if(tmpVar != 'x'){
        let tmpNum = Number(tmpVar[tmpVar.length-1]) - 1;
        draw = false;
        if(tmpNum<3){
            arrLine[tmpNum].classList.add('verticalWinLine');
        } else if(tmpNum<6){
            arrLine[tmpNum].classList.add('horizontalWinLine');
        } else{
            arrLine[tmpNum].classList.add('crossWinLine');
        }
        sleep(1200).then(() => {
            gridBox.classList.add('vanish');
            msgBox.innerHTML = '';
            msgBox.classList.add('msg');
            msgBox.textContent = `Team : "${winner}" won the game!!`;
        });
        sleep(3000).then(() => {
            
            location.reload();
        });
    }
}

// for timeout before refrashing
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }