const figurePart = document.querySelectorAll('.figure-part')
const finalMessage = document.getElementById('final-message')
const popup = document.getElementById('popup-container')
const playAgainBtn = document.getElementById('play-again')
const attemptContainer = document.getElementById('attempt-container')
const correctLetters = []
const wrongLetters = []
var words = ['hello', 'pragram', 'small','big', 'walking', 'looking', 'javascript']
var selected = words[Math.floor(Math.random()*(words.length - 1))]

function displayWords() {
    
    var word = document.getElementById('word')
    for(let letter of selected){
        if (word.firstChild){
            word.removeChild(word.firstChild)
        }else {break}
    }   
    for (let letter of selected){
        var letter_div = document.createElement('div')
        letter_div.classList.add('letter')
        if (correctLetters.includes(letter)) {letter_div.innerHTML = letter}
        else {letter_div.innerHTML = ''}
        word.appendChild(letter_div)
    };
    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord)
    if (innerWord === selected){
        finalMessage.innerText = 'Congratulations! You won!';
        popup.style.display = 'flex'
    }
}

function showAttempt(){
    attemptContainer.classList.add('show')
    setTimeout(() => {attemptContainer.classList.remove('show')},2000)
}







function main(){
    displayWords()
    window.addEventListener('keydown',e => {
        if (e.keyCode >= 65 && e.keyCode <= 90){
            const letter = e.key
            if (selected.includes(letter)){
                if (!correctLetters.includes(letter)){
                    correctLetters.push(letter)
                    displayWords()
                } else {showAttempt()}
            }
            else {
                if (!wrongLetters.includes(letter)){
                    wrongLetters.push(letter)
                    updateWrongLetters();
                } else {showAttempt()}
            }
        }
    })
}
main()
























