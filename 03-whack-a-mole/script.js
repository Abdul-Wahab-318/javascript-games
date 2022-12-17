let allCards = document.querySelectorAll(".grid-card")
let currentMoleID = Math.floor( Math.random() * 10 ) 
let time = 30 
let timeNode = document.getElementById("timer")
let score = 0 
let scoreNode = document.getElementById("score")

function handleCardClick()
{
    if ( this.getAttribute("id") != currentMoleID && time != 0 )
    return

    score++ ; 
    scoreNode.innerText = score
    
}

allCards.forEach( card => {
    card.addEventListener("click" , handleCardClick )
})

function randomizeMole()
{
    allCards.forEach( el => el.classList.remove("mole-card"))

    currentMoleID = Math.floor( Math.random() * 9 )
    allCards[ currentMoleID ].classList.add("mole-card")
}

function stop()
{
    clearInterval(shiftMole)
    clearInterval(timer)
    allCards.forEach( card => card.removeEventListener("click" , handleCardClick) )
}

function updateTimer()
{
    time-- ;
    timeNode.innerText = time 

    if ( time === 0 )
        stop()
}

let shiftMole = setInterval( randomizeMole , 400 )
let timer = setInterval( updateTimer , 1000 )



