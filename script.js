const figurePart = document.querySelectorAll('.figure-part')
const finalMessage = document.getElementById('final-message')
const popup = document.getElementById('popup-container')
const playAgainBtn = document.getElementById('play-button')
const attemptContainer = document.getElementById('attempt-container')
var word = document.getElementById('word')
const correctLetters = []
const wrongLetters = []
const wrongLettersEl = document.querySelector('.wrong-letters')
var words = ['hello', 'pragram', 'small','big', 'walking', 'looking', 'javascript']
var selected = words[Math.floor(Math.random()*(words.length - 1))]


function displayWords() {
    for(let letter of selected){
        if (word.firstChild){
            word.removeChild(word.firstChild)
        }else {break}
    }   
    for (let letter of selected){
        var letter_div = document.createElement('div')
        letter_div.classList.add('letter')
        if (correctLetters.includes(letter)) {
            letter_div.innerHTML = letter
        }
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



function updateWrongLetters(){
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p> Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    figurePart.forEach((part, index) => {
        const errors = wrongLetters.length
        if (index === errors - 1){
            part.style.display = 'block'
        }
    })
    if (figurePart[figurePart.length - 1].style.display === 'block'){
        finalMessage.innerText = 'Sorry! You Lost!';
        popup.style.display = 'flex'
    }
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
    playAgainBtn.addEventListener('click', () => {
        correctLetters.splice(0)
        wrongLetters.splice(0)
        word.innerHTML = ''
        selected = words[Math.floor(Math.random()*(words.length))]
        displayWords()
        updateWrongLetters();
        popup.style.display = 'none'
        figurePart.forEach(part => {
            part.style.display = 'none'
        })    
     
    })
}
main()
























