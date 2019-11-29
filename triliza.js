
const xCell = "X";
const oCell = "O";
const emptyCell =  '&nbsp;';

function trilizaCellContent(trilizaId, r, c) {
    return document.querySelector(`#${trilizaId} > tbody > tr:nth-child(${r}) > td:nth-child(${c}) > a`)
        .innerHTML;
}

function trilizaBoardIsFull(trilizaId) {
    for (let r = 1; r <= 3; r++) {
        for (let c = 1; c <= 3; c++) {
            if (trilizaCellContent(trilizaId, r, c) === emptyCell) {
                return false;
            }
        }
    }
    return true;
}

function trilizaBoardWithTriplet(trilizaId) {
    
    let d1 = 0;
    for (let i = 1; i <= 3; i++) {
        const c = trilizaCellContent(trilizaId, i, i);
        if (c === xCell) {
            d1 += 1;
        } else if (c === oCell) {
            d1 += -1;
        }
    }
    if (Math.abs(d1) === 3) {
        return true;
    }
    
    let d2 = 0;
    let j = 3;
    for (let i = 1; i <= 3; i++) {
        const c = trilizaCellContent(trilizaId, i, j);
        if (c === xCell) {
            d2 += 1;
        } else if (c === oCell) {
            d2 += -1;
        }
        j--;
    }

    if (Math.abs(d2) === 3) {
        return true;
    }    

   
    for (let i = 1; i <= 3; i++) {
        let L = 0;
        for (let j = 1; j <= 3; j++) {
            const c = trilizaCellContent(trilizaId, j, i);
            if (c === xCell) {
                L += 1;
            } else if (c === oCell) {
                L += -1;
            }
        }
        if (Math.abs(L) === 3) {
            return true;
        }
    }
    
    for (let i = 1; i <= 3; i++) {
        let L = 0;
        for (let j = 1; j <= 3; j++) {
            const c = trilizaCellContent(trilizaId, i, j);
            if (c === xCell) {
                L += +1;
            } else if (c === oCell) {
                L += -1;
            }
        }
        if (Math.abs(L) === 3) {
            return true;
        }
    }
    return false;
}

function triliza(trilizaId) {
    
    document.getElementById('result').innerText = ". . .";
    let nextPlayer = xCell;

    document.querySelectorAll(`#${trilizaId} a`).forEach((cell) => {

        cell.innerHTML = emptyCell;
        cell.addEventListener("click", () => {

            if (trilizaBoardWithTriplet(trilizaId)) {
                return;
            }

           
            if (cell.innerHTML === emptyCell) {
            cell.innerHTML = nextPlayer;

            if (trilizaBoardIsFull(trilizaId)) {
                document.getElementById('result').innerText = 'It\'s a tie!';
                
            }

            if (trilizaBoardWithTriplet(trilizaId)) {
                document.getElementById('result').innerText = `Player ${nextPlayer}!`;
                
            }

            if(nextPlayer === xCell) {
                nextPlayer = oCell;
            }else {
                nextPlayer = xCell;
            }
        }

    })
    
    })
 document.getElementById('but').onclick = function() {
     triliza(trilizaId);
     
 }
}
triliza('triliza');