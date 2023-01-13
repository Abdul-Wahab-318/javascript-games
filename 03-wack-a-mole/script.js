let cards = [
    {
        name : "kakashi" , 
        src : "./images/kakashi.png"
    } , 
    {
        name : "saitama" , 
        src : "./images/saitama.png"
    } , 
    {
        name : "tanjiro" , 
        src : "./images/tanjiro.png"
    } , 
    {
        name : "satoru" , 
        src : "./images/satoru.png"
    } , 
    {
        name : "sasuke" , 
        src : "./images/sasuke.png"
    } , 
    {
        name : "sasuke" , 
        src : "./images/sasuke.png"
    } , 
    {
        name : "kakashi" , 
        src : "./images/kakashi.png"
    } , 
    {
        name : "saitama" , 
        src : "./images/saitama.png"
    } , 
    {
        name : "tanjiro" , 
        src : "./images/tanjiro.png"
    } , 
    {
        name : "satoru" , 
        src : "./images/satoru.png"
    } , 
    {
        name : "itachi" , 
        src : "./images/itachi.png"
    } , 
    {
        name : "itachi" , 
        src : "./images/itachi.png"
    }  

]

let score = 0 
let cardsChosen = []
let cardsChosenIds = []
let cardsRemoved = []
let allCards = document.querySelectorAll(".grid-card")

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function updateNodeText ( node , newText )
{
    node.innerText = newText 
}

// event handler when card is clicked
function handleClick ()  {
    let cardID = this.getAttribute("data-id")
    let card = cards[cardID]
    console.log(card.name)
    this.firstChild.setAttribute("src",card.src)
    cardsChosen.push( card.name )
    cardsChosenIds.push( cardID )

    console.log("before")
    setTimeout(()=> {
        console.log("in")
        checkMatch()
    }, 500 )
    console.log("after")
}

//checks whether the two most recently chosen cards are same or not
function checkMatch()
{
    if ( cardsChosen.length !== 2 ) return 
    if ( cardsChosenIds[0] == cardsChosenIds[1] )
    {
        alert("You selected the same card twice")
        cardsChosen.pop()
        cardsChosenIds.pop()
        return
    }
    else if ( cardsChosen[0] == cardsChosen[1] )
    {
        console.log("same found")
        allCards[cardsChosenIds[0]].firstChild.setAttribute("src", "./images/blank.jpg" )
        allCards[cardsChosenIds[1]].firstChild.setAttribute("src", "./images/blank.jpg" )
        cardsRemoved.push( cardsChosen )
        updateNodeText( document.getElementById("score") , ++score )
    }
    else if ( cardsChosen.length == 2 && cardsChosen[0] !== cardsChosen[1] )
    {
        alert(" Try Again ")
        allCards[cardsChosenIds[0]].firstChild.setAttribute("src", "./images/roll.png" )
        allCards[cardsChosenIds[1]].firstChild.setAttribute("src", "./images/roll.png" )
        //re shuffle cards
        cards = shuffleArray(cards)
        
    }
    cardsChosen = []
    cardsChosenIds = []

    if ( cardsRemoved.length == 6 )
    document.getElementById("score").innerText = "You Won !"

}
console.log('cards : ' , cards)
let createCheckBoard = () => {

    let shuffledCards = shuffleArray( cards )
    
    for ( let i = 0 ; i < shuffledCards.length ; i++ )
    {
        allCards[i].setAttribute("src",shuffledCards[i].src)
        allCards[i].setAttribute("data-id" , i)
        allCards[i].addEventListener("click" , handleClick )
    }
}

//creates checkboard by assigning image src to all the cards ( shuffle on each refresh )
createCheckBoard()
















