let fields = [];

let currentShape = 'red'

function fillShape(id) {
if (currentShape == 'red') {
    currentShape = 'green';
    document.getElementById('player1').classList.add('playerInactiv');
    document.getElementById('player2').classList.remove('playerInactiv');

}else{
    currentShape = 'red';
    document.getElementById('player1').classList.remove('playerInactiv');
    document.getElementById('player2').classList.add('playerInactiv');

}
    fields[id] = currentShape;
    console.log(fields)
    draw();
    checkForWin();
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'green') {
            document.getElementById('green' + i).classList.remove('dNone');
        }

        if (fields[i] == 'red') {
            document.getElementById('red' + i).classList.remove('dNone');
        }
        
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[4]) {
        winner = fields[3]
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[6]
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
    }

    if(!!winner) {
        console.log('GEWONNEN:', winner)
    }
}