const btnAnswer = document.getElementById('answerButton');
const divAnswer = document.getElementById('answer');
const p = document.createElement('p');

function magicball() {
    btnAnswer.style.display = 'none';
    divAnswer.appendChild(p);
    
    if(Math.floor(Math.random() * (3 - 1) + 1) === 1) {
        p.innerHTML = "Sim";
    }
    else {
        p.innerHTML = "Não";
    }
}

function reset() {
    p.innerHTML = "";
    btnAnswer.style.display = 'inline-block';
}

const btnmagicball = document.getElementById('answerButton');
btnmagicball.addEventListener('click', magicball);
const btnreset = document.getElementById('resetButton');
btnreset.addEventListener('click', reset);
