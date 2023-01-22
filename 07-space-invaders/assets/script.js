let grid = document.querySelector(".grid")
let width = 20 
let currentPos = 349
let direction = 1 
let gameStatus = document.getElementById("status")
let score = 0 

for ( let i = 0 ; i < 400 ; i++ )
{
    let square = document.createElement('div')
    square.setAttribute("id",i)
    grid.appendChild(square)
} 


let squares = document.querySelectorAll(" .grid div ")
let aliens = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34 , 40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]
let aliensRemoved = []

squares[currentPos].classList.add("user")

function draw()
{
    for ( let i = 0 ; i < aliens.length ; i++ )
    {
        if ( !aliensRemoved.includes(i) )
        squares[ aliens[i] ].classList.add("alien")
    }

}
draw()

function remove()
{
    for ( let i = 0 ; i < aliens.length ; i++ )
    {
        squares[ aliens[i] ].classList.remove("alien")
    }
}

function checkLose()
{
    for ( let i = 35 ; i < aliens.length ; i++ )
    {
        if ( squares[ aliens[i] ].classList.contains("user") )
        {
            document.removeEventListener("keydown" , (e)=>moveUser(e))
            document.removeEventListener("keydown" , (e)=>fireLaser(e))
            gameStatus.innerText = "You Lose !"
            clearInterval(moveAliensInterval)
        }
    }

    if ( aliens.length === aliensRemoved.length )
    {
        clearInterval(moveAliensInterval)
        document.removeEventListener("keydown" , (e)=>moveUser(e))
        document.removeEventListener("keydown" , (e)=>fireLaser(e))
        gameStatus.innerText = "You Win !"
    }
}

function moveAliens()
{
    let rightEdge = (aliens[ aliens.length - 1 ] + 1) % width === 0 
    let leftEdge = aliens[0] % width === 0
    remove()

    //direction = 1 means aliens are moving right

    if ( rightEdge && direction === 1 )
    {
        console.log("right edge reached")
        for ( let i = 0 ; i < aliens.length ; i++ )
        aliens[i] += width + 1 
        direction = -1 
    }

    if ( leftEdge && direction !== 1 )
    {
        console.log("left edge")
        for( let i = 0 ; i < aliens.length ; i++ )
        aliens[i] += width - 1
        direction = 1
    }

    for ( let i = 0 ; i < aliens.length ; i++ )
    aliens[i] += direction
    
    checkLose()
    draw()
}

function moveUser({key})
{
    squares[currentPos].classList.add("user")
    squares[currentPos].classList.remove("user")
    
    switch( key )
    {
        // if user has not reached the right edge of the grid then move user to right
        case 'ArrowRight' :
            if ( (currentPos + 1) % width  !== 0  )
            currentPos++
            break ; 
            
            case 'ArrowLeft' :
                if ( currentPos % width  !== 0  )
                currentPos--
            break ; 
        }
        
        squares[currentPos].classList.add("user")
        
}

function fireLaser({key})
{
    let laserID
    let currentLaserInd = currentPos ;
    
    function moveLaser()
    {
        if ( currentLaserInd - width < 0 )
        clearInterval(laserID)

        squares[ currentLaserInd ].classList.remove("laser")
        currentLaserInd -= width
        squares[ currentLaserInd ].classList.add("laser")

        if ( squares[ currentLaserInd ].classList.contains("alien")  )
        {
            clearInterval(laserID)
            squares[ currentLaserInd ].classList.remove("laser")
            squares[ currentLaserInd ].classList.remove("alien")
            aliensRemoved.push ( aliens.indexOf( currentLaserInd ) )
            score++ 
            gameStatus.innerText = score
        }

    }

    switch( key )
    {
        case 'ArrowUp':
            laserID = setInterval( moveLaser , 50 )
    }

}

let moveAliensInterval = setInterval( moveAliens , 250)

document.addEventListener("keydown" , (e)=>moveUser(e))
document.addEventListener("keydown" , (e)=>fireLaser(e))
    
    
    
    
    
    
    
    
    
    