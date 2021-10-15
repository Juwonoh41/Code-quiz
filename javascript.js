//Elements
var timerElement = document.getElementById('timer')
var questionElement = document.getElementById('question')
var btn1Element = document.getElementById('btn1')
var btn2Element = document.getElementById('btn2')
var btn3Element = document.getElementById('btn3')
var btn4Element = document.getElementById('btn4')
var answerBtnElement = document.getElementById('answer-btn')

//Array value
var arrayValue = 0

//Local storage
var score = localStorage.getItem("score")
//Array
var myQuestions = [
    {
      question: "Who wrote Harry Potter?",
      answers: [
         "Stephen King",
         "George RR Martin",
         "JK Rowling",
         "F. Scott Fitzgerald"
      ],
        
    },
    {
      question: "Who was the main character of Death Note?",
      answers: [
         "Naruto",
         "Sakura",
         "Light",
         "L"]
      ,
      
    },
   
  ];


//timer

var second = 10;

var timeInterval = setInterval(countdown, 1000)

function countdown(){
  second--;
  var newTime = second
  timerElement.innerHTML = `${newTime}`
  if(second === 0){
    clearInterval(timeInterval)
    console.log('hi')
    scoreDisplay()
  }
 
}

//Question
questionElement.innerHTML = myQuestions[0].question

btn1Element.innerHTML = myQuestions[0].answers[0]
btn2Element.innerHTML = myQuestions[0].answers[1]
btn3Element.innerHTML = myQuestions[0].answers[2]
btn4Element.innerHTML = myQuestions[0].answers[3]

//Eventlistner
btn1Element.addEventListener('click', function(){  
  if('click'){
    
    
    questionElement.innerHTML = myQuestions[1].question
    btn1Element.innerHTML = myQuestions[1].answers[0]
    btn2Element.innerHTML = myQuestions[1].answers[1]
    btn3Element.innerHTML = myQuestions[1].answers[2]
    btn4Element.innerHTML = myQuestions[1].answers[3]
    second -= 5
  }
  
})

btn2Element.addEventListener('click', function(){  
  if('click'){
    
    
    questionElement.innerHTML = myQuestions[1].question
    btn1Element.innerHTML = myQuestions[1].answers[0]
    btn2Element.innerHTML = myQuestions[1].answers[1]
    btn3Element.innerHTML = myQuestions[1].answers[2]
    btn4Element.innerHTML = myQuestions[1].answers[3]
    second -= 5
  }
})

btn3Element.addEventListener('click', function(){  
  if('click'){
    
    
    questionElement.innerHTML = myQuestions[1].question
    btn1Element.innerHTML = myQuestions[1].answers[0]
    btn2Element.innerHTML = myQuestions[1].answers[1]
    btn3Element.innerHTML = myQuestions[1].answers[2]
    btn4Element.innerHTML = myQuestions[1].answers[3]
    
  }
  score++


})

btn4Element.addEventListener('click', function(){  
  if('click'){
    
    
    questionElement.innerHTML = myQuestions[1].question
    btn1Element.innerHTML = myQuestions[1].answers[0]
    btn2Element.innerHTML = myQuestions[1].answers[1]
    btn3Element.innerHTML = myQuestions[1].answers[2]
    btn4Element.innerHTML = myQuestions[1].answers[3]
    second -= 5
  }
})

//End page
function scoreDisplay(){
  answerBtnElement.classList.add('hide')
  questionElement.innerHTML = "Score: " + score
  console.log('hi')
}

//if time end






  
    





