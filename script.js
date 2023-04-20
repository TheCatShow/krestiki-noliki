let cells = document.querySelectorAll('#field td');
let winner = document.querySelector('#winner');
let result = document.querySelector("#text");
let close = document.querySelector('#close');

// cells = [ td1 td2 td3 td4 td5 ]

function start(cells) {
    let i = 1;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                this.textContent = '❌';
            } else {
                this.textContent = '⭕';
            }
            this.removeEventListener('click', step)
            if (isWinner(cells) === true) {
                winner.style.display = 'flex';
                result.textContent = `Победитель ${this.textContent}`;
            } else if (i == 9) {
                winner.style.display = 'flex';
                result.textContent = 'Ничья!';
            };
            i++;
        })
    }
}

start(cells);

function disableEnter() {
    for (let cell of cells) {

    }
}

close.addEventListener('click', function(){
    winner.style.display = 'none';
    location.reload();
    for (let cell of cells) {
        cell.textContent = '';
    }
    start(cells);
});

// i=1
// cell = td1/ td2/ td3 ....
/* tdl.addEventListener('click', function step(){
    if (i % 2 == 0) {
        td2.textContent = '0';
        } else {
        td2.textContent = 'X';
        }
    i=3;
    td2.removeEventListener('click', step)
    if (isWinner(cells) === true) {
            alert(`Победитель ${td2.textContent}`);
    }

})
*/

function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

start(cells);

/* 
cells = [ td1 td2 td3 td4 td5 ]
            comb        comb       comb      comb       comb         comb      comb       comb
combs = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ] 

// 2 шаг

comb = [0, 1, 2]
cells[comb[0]].textContent == cells[comb[1]].textContent && cells[4].textContent == cells[5].textContent &&
*/