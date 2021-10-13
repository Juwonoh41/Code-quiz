const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progessText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const timer = document.querySelector('#timer')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availbleQuestions = []

let questions = [
    {
        question: 'What series is Mordor in?',
        choice1: 'Percy Jackson',
        choice2: 'Lord of the Rings',
        choice3: 'Eragon',
        choice4: 'Harry Potter',
        answer: 2,
    },
    {
        question: 'Who made the one ring in Lord of the rings?',
        choice1: 'Sauron',
        choice2: 'Bilbo',
        choice3: 'Elrond',
        choice4: 'Gandalf',
        answer: 1,
    },
    {
        question: 'What is a Harry Potter spell?',
        choice1: 'Open Sesame',
        choice2: 'Shazam',
        choice3: 'Morphin time',
        choice4: 'Lumos',
        answer: 4,
    },
    {
        question: 'What series does Sauske belong too?',
        choice1: 'Naruto',
        choice2: 'Hunter x Hunter',
        choice3: 'Death Note',
        choice4: 'Attack on Titan',
        answer: 1,
    },
    {
        question: 'What is the sword of the Starks called?',
        choice1: 'Widowmaker',
        choice2: 'Ice',
        choice3: 'Red Rain',
        choice4: 'Needle',
        answer: 2,
    },

]

const SCORE_POINTS = 100;
const Max_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0 
    score = 0 
    availbleQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    
}


