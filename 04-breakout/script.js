let container = document.getElementById("container")
let containerWidth = container.offsetWidth
let containerHeight = container.offsetHeight
let score = 0 
const blockHeight = 20
const blockWidth = 120
const blocks = []

let userStartPos = [340 , 60]
let currentPos = userStartPos

// each block instance has position properties that will be used for inserting into container 
// position properties are necessary because we are using position relative/absolute and also because we need to check for collision with ball
class Block{

    constructor( xAxis , yAxis )
    {
        this.bottomLeft = [ xAxis , yAxis ]
        this.bottomRight = [ xAxis + blockWidth , yAxis ]
        this.topLeft = [ xAxis , yAxis + blockHeight ]
        this.topRight = [ xAxis + blockWidth , yAxis + blockHeight ]
    }

}

// create objects that represent each block and insert them into blocks array
function fillBlockArray()
{
    let prev_x_axis = 10  
    let prev_y_axis = 10 


    for ( let i = 1 ; i <= 24 ; i++ )
    {
        
        blocks.push( new Block( prev_x_axis , prev_y_axis ) )
        
        prev_x_axis += 130  
        
        if ( i % 6 == 0 )
        {
            prev_x_axis = 10 
            prev_y_axis += 30
        }
    }
}

//insert Blocks into UI
function drawBlocks()
{
    for ( let i = 0 ; i < blocks.length ; i++ )
    {
        let block = document.createElement("div")
        block.classList.add("grid-card")
        block.style.left = blocks[i].bottomLeft[0] + 'px' 
        block.style.top = blocks[i].bottomLeft[1] + 'px' 
        container.appendChild( block )
    }
}


fillBlockArray()
drawBlocks()


let user = document.createElement("div")
user.classList.add('user')
user.style.left = currentPos[0] + 'px'
user.style.bottom = currentPos[1] + 'px'
container.appendChild( user )

window.addEventListener('keydown' , moveUser )

function drawUser()
{
    user.style.left = currentPos[0] + 'px'
    user.style.bottom = currentPos[1] + 'px'
}

function moveUser( event )
{
    switch ( event.key )
    {
        case 'ArrowRight' :
        if ( currentPos[0]  < containerWidth - blockWidth - 10 )
        {
            currentPos[0] += 30
            drawUser()
        }
        break


        case 'ArrowLeft' : 
        if ( currentPos[0]  > 10 )
        {
            currentPos[0] -= 30
            drawUser()
        }
        break

    }
}



















