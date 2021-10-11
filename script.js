const startBtn = document.getElementById('start-button')
const nextBtn = document.getElementById('next-button')
const questionBoxElement = document.getElementById('question-container')
const titElement = document.getElementById('start-prompt')
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-buttons')



let randomQuestions, currentQuesIndex
//Event Listner
startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', ()=> {
    currentQuesIndex++
    setQuestion()
})
//Starting game function 
function startGame(){
    console.log('started')
    startBtn.classList.add('hide')
    
    titElement.classList.add('hide')
    questionBoxElement.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuesIndex = 0 
    setQuestion()
}


//causes the next question to pop up
function setQuestion(){
    reset()
    showQuestion(randomQuestions[currentQuesIndex])
}


function reset(){
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild){
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}


function showQuestion(question){
    
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    })
    
}
// selects the answer
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button =>
        {
            setStatusClass(button, button.dataset.correct)
        })
    if(randomQuestions.length > currentQuesIndex + 1){
        nextBtn.classList.remove('hide')
    } else{
        
        startBtn.classList.remove('hide')
        titElement.replace = 'Gamer over'
        startBtn.replace = 'Restart'
        questionBoxElement.classList.add('hide')
    }


}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


//List of questions
const questions = [
    {
        question: 'What is :3+3?',
        answers: [
            {text:'6', correct: true},
            {text:'9', correct: false},
            {text:'8', correct: false},

        ],
        
        
            
    }
]



//shows and subtracts from the total timer
var seconds

function timerCountDown(){


}