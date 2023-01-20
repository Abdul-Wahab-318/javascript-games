const blocks = document.querySelectorAll(".grid div")
const leftLogs = document.querySelectorAll(".log-left")
const rightLogs = document.querySelectorAll(".log-right")
const leftCars = document.querySelectorAll(".car-left")
const rightCars = document.querySelectorAll(".car-right")
let index = 76 
let width = 9
let status = document.getElementById("status")

blocks[index].classList.add("frog")

function moveFrog( {key} )
{

    blocks[index].classList.remove("frog")
    switch( key )
    {
        case 'ArrowUp' : 
        if ( index - width >= 0 )
        index -= width 
        break ;

        case "ArrowDown" : 
        if ( index + width < 81 )
        index += width 
        break ; 

        case "ArrowRight" : 
        if ( index % width < width - 1 )
        index++
        break ; 

        case "ArrowLeft" : 
        if ( index % width !== 0 )
        index--
        break ;         
    }
    blocks[index].classList.add("frog")
}

function moveLeftLog( log )
{
    switch( true )
    {

        case log.classList.contains("l1") : 
        log.classList.remove("l1")
        log.classList.add("l2")
        break ; 

        case log.classList.contains("l2") : 
        log.classList.remove("l2")
        log.classList.add("l3")
        break ; 

        case log.classList.contains("l3") : 
        log.classList.remove("l3")
        log.classList.add("l4")
        break ;

        case log.classList.contains("l4") : 
        log.classList.remove("l4")
        log.classList.add("l5")
        break ;


        case log.classList.contains("l5") : 
        log.classList.remove("l5")
        log.classList.add("l1")
        break ;

    }
}

function moveRightLog( log )
{
    switch( true )
    {

        case log.classList.contains("l5") : 
        log.classList.remove("l5")
        log.classList.add("l4")
        break ; 

        case log.classList.contains("l4") : 
        log.classList.remove("l4")
        log.classList.add("l3")
        break ; 

        case log.classList.contains("l3") : 
        log.classList.remove("l3")
        log.classList.add("l2")
        break ;

        case log.classList.contains("l2") : 
        log.classList.remove("l2")
        log.classList.add("l1")
        break ;


        case log.classList.contains("l1") : 
        log.classList.remove("l1")
        log.classList.add("l5")
        break ;

    }
}

function moveRightCar( car )
{
    switch( true )
    {

        case car.classList.contains("c3") : 
        car.classList.remove("c3")
        car.classList.add("c2")
        break ; 

        case car.classList.contains("c2") : 
        car.classList.remove("c2")
        car.classList.add("c1")
        break ; 

        case car.classList.contains("c1") : 
        car.classList.remove("c1")
        car.classList.add("c3")
        break ;

    }
}

function moveLeftCar( car )
{
    switch( true )
    {

        case car.classList.contains("c1") : 
        car.classList.remove("c1")
        car.classList.add("c2")
        break ; 

        case car.classList.contains("c2") : 
        car.classList.remove("c2")
        car.classList.add("c3")
        break ; 

        case car.classList.contains("c3") : 
        car.classList.remove("c3")
        car.classList.add("c1")
        break ;

    }
}

function autoMove( item , move  )
{
    item.forEach( el => move( el ) )
}
function checkWin()
{
    let end = document.querySelector(".ending-block")

    if ( end.classList.contains("frog") )
    {
        clearAllIntervals()
        clearAllIntervals()
        status.innerText = "You Win !"
        document.removeEventListener("keydown" , moveFrog )
    }
}

function checkLose()
{
    let frog = document.querySelector(".frog")
    if ( frog.classList.contains("l1") || frog.classList.contains("l2") || frog.classList.contains("l3") || frog.classList.contains("c1") )
    {
        clearAllIntervals()
        status.innerText = "You Lose !"
        document.removeEventListener("keydown" , moveFrog )
    }
}

function checkOutCome()
{
    checkLose()
    checkWin()
}

function clearAllIntervals()
{
    clearInterval(moveLeftCarInterval)
    clearInterval(moveRightCarInterval)
    clearInterval(moveLeftLogInterval)
    clearInterval(moveRightLogInterval)
    clearInterval(checkInterval)
}

let moveLeftLogInterval = setInterval( ()=>autoMove(leftLogs , moveLeftLog) , 1000 )
let moveRightLogInterval = setInterval( ()=>autoMove(rightLogs , moveRightLog) , 1000 )

let moveLeftCarInterval = setInterval( ()=>autoMove(leftCars , moveLeftCar) , 1000 )
let moveRightCarInterval = setInterval( ()=>autoMove(rightCars , moveRightCar ) , 1000 )

let checkInterval = setInterval( checkOutCome , 50 )

document.addEventListener("keydown" , moveFrog)