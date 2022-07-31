const word=document.getElementById("word")
const play=document.getElementById("play")
const usedwords=document.getElementsByClassName(".usedletters")
const items=document.querySelectorAll(".item")

let selectedcity=getRandomWord()
let correctLetters=[]
let wrongletters=[]

function getRandomWord(){
    const words=["ankara","trabzon","samsun","ızmır","bursa","sıvas","konya","eskısehır","antalya"]
    return words[Math.floor(Math.random()*(words.length))]
}
function showWord(){
    word.innerHTML=`${selectedcity.split("").map(letter=>`
        <div id="letter">
        ${correctLetters.includes(letter) ? letter: ''}
    </div>`
    ).join("")}`
    const w=word.innerText.replace(/\n/g,"")
    if(w===selectedcity){
        alert("You Won")
    }
}
function findWrongLetter(){

    items.forEach((item,index)=>{
        const errorCount=wrongletters.length
        if(index<errorCount){
            item.style.display="block"
        } else{
            item.style.display="none"
        }
    })
if(wrongletters.length==items.length){
    alert("You Lost!")
}

}
window.addEventListener("keydown",(e)=>{
    if(e.keyCode>=65 && e.keyCode<=90){
    const letter=e.key
    if(selectedcity.includes(letter)){
        if(!correctLetters.includes(letter)){
        correctLetters.push(letter)
        showWord()
    }} else{
        if(!wrongletters.includes(letter)){
            wrongletters.push(letter)
            findWrongLetter()
        } else{
            alert("This letter has already used")
        }
    }
}
})
showWord()
play.addEventListener("click",()=>{
    correctLetters=[]
    wrongletters=[]
    selectedcity=getRandomWord()
    showWord()
    findWrongLetter()
})