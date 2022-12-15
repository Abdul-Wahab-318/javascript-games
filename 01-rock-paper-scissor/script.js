let getRandom = () => {
    return Math.floor( Math.random() * 3 ) 
}

let rockBtn = document.getElementById("btnRock")
let paperBtn = document.getElementById("btnPaper")
let scissorBtn = document.getElementById("btnScissor")

let allBtns = document.querySelectorAll(".action-btn")

let UpdateUI = ( win , robotAns ) => {
    
    let robotUI =  document.getElementById("robotAnswer")
    let result = document.getElementById("result")
    if ( win === undefined && robotAns === undefined )
    {
        result.innerText = ". . ."
        robotUI.setAttribute("src" , "")
        return
    }

    if( robotAns == 0 )
        robotUI.setAttribute("src" , "./images/rock.png")
    else if( robotAns == 1 )
        robotUI.setAttribute("src" , "./images/paper.png")
    else if( robotAns == 2 )
        robotUI.setAttribute("src" , "./images/scissor.png")

    if ( win === "draw" )
        result.innerText = "Draw"
    else if ( win )
        result.innerText = "You Win"
    else
        result.innerText = "You Lose"
    

}

let computeAnswer = ( humanAns ) => {
    console.log("tf")
    let robotAns = getRandom()
    let win = false 

    if ( humanAns == 0 && robotAns == 2 )
        win = true 
    else if ( humanAns == 1 && robotAns == 0 )
        win = true 
    else if ( humanAns == 2 && robotAns == 1 )
        win = true 
    else if ( humanAns == robotAns )
        win = "draw"

    UpdateUI( win , robotAns )
    
}

UpdateUI()

for ( let el = 0 ; el < 3 ; el++ )
{
    allBtns[el].addEventListener("click" , () => computeAnswer( el ) )
}

























