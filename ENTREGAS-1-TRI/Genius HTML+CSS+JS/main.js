const divScore = document.querySelector("div.score")
const divRecord = document.querySelector("div.record")
const buttonStart = document.querySelector("button.start")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div.color"))
const divCnt = document.querySelector("div.cnt")
const divModalContainer = document.querySelector("div.modalContainer")
const divGameOver = document.querySelector("div.gameover")


let sequencia = []
let animatingColors = false
let currentSequenciaIdx = 0
let counting = true

buttonStart.addEventListener("click", ev => {

    inicio()
    divModalContainer.classList.add("hide")

})

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        currentSequenciaIdx = 0
        return
    }

    const idxClickedElement = divs.indexOf(ev.target)

    if (idxClickedElement !== sequencia[currentSequenciaIdx]) {
        divGameOver.innerHTML = "GAMEOVER"
        buttonStart.innerHTML = "Restart"
        divModalContainer.classList.remove("hide")
        return
    }

    currentSequenciaIdx++
    ev.target.classList.add("animate")

    if (currentSequenciaIdx >= sequencia.length) {
        currentSequenciaIdx = 0
        setTimeout(() => turno(), 3000)
    }
})



divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
            animatingColors = index < sequencia.length - 1
        }, 1000 * index);
    })
}

function inicio() {
    let cnt = 3
    sequencia = []
    currentSequenciaIdx = 0
    let idx = setInterval(() => {
        divCnt.innerHTML = cnt--
        if (cnt <= 0) {
            setTimeout(() => divCnt.innerHTML = "GO", 1000)
            setTimeout(() => divCnt.innerHTML = sequencia.length, 2000)
            setTimeout(() => turno(), 3000)
            clearInterval(idx)
        }
    }, 1000)
}

function turno() {
    divScore.innerHTML = sequencia.length
    divCnt.innerHTML = sequencia.length
    if (divRecord.innerHTML < sequencia.length) {
        divRecord.innerHTML = sequencia.length
    }
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}

