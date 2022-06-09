let fields = [];
let drawGame = 0;
let start = false;
let gameOver = false;
let currentShape = 'red';
let greenKlick = new Audio('audio/klickGreen.mp3')
let redKlick = new Audio('audio/klickRed.mp3')
let winSound = new Audio('audio/win.mp3')
let restartSound = new Audio('audio/restart.mp3')
let drawGamePlay = new Audio('audio/draw.mp3')
let backgroundMusic = new Audio('audio/backgroundMusic.mp3')
let startSound = new Audio('audio/start.mp3')

function startGame() {
    start = true;
    startSound.play();
    backgroundMusic.play();
    document.getElementById('startButton').classList.add('dNone');
}

function fillShape(id) {
    if (!fields[id] && !gameOver && start) {

        if (currentShapeRed()) {
            currentShape = 'green';
            document.getElementById('player1').classList.add('playerInactiv');
            document.getElementById('player2').classList.remove('playerInactiv');
            greenKlick.play();
            drawGame++;
        } else {
            currentShape = 'red';
            document.getElementById('player1').classList.remove('playerInactiv');
            document.getElementById('player2').classList.add('playerInactiv');
            redKlick.play()
            drawGame++;
        }
        fields[id] = currentShape;
        console.log(fields)
        draw();
        checkForWin();
    }
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
        document.getElementById('line0').style.transform = 'scaleX(1)'
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[4]) {
        winner = fields[3]
        document.getElementById('line1').style.transform = 'scaleX(1)'
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[6]
        document.getElementById('line2').style.transform = 'scaleX(1)'
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1)'
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)'

    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)'

    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1.2)'

    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line7').style.transform = 'rotate(135deg) scaleX(1.2)'

    }

    if (!!winner) {
        console.log('GEWONNEN:', winner)
        gameOver = true;
        winSound.play()
        backgroundMusic.pause()
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('dNone')
        }, 200)

        setTimeout(function () {
            document.getElementById('restartButton').classList.remove('dNone')
        }, 2000)
    }

    if (drawGame == 9 && !winner){
        console.log('DRAW')
        gameOver = true;
        backgroundMusic.pause()
        drawGamePlay.play()
        setTimeout(function () {
            document.getElementById('restartButton').classList.remove('dNone')
        }, 2000)
        setTimeout(function () {
            document.getElementById('tie').classList.remove('dNone')
        }, 200)
    }
}

function restart() {
    restartSound.play()
    setTimeout(function () {
        location.reload()
    }, 500)
}

function currentShapeRed() {
    return currentShape == 'red';
}

