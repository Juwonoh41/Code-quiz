//Elements
var timerElement = document.getElementById('timer')
var questionElement = document.getElementById('question')
var btn1Element = document.getElementById('btn1')
var btn2Element = document.getElementById('btn2')
var btn3Element = document.getElementById('btn3')
var btn4Element = document.getElementById('btn4')
var btnEl = document.querySelector('.btn')

//Array value
var questionIndex = 0

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
    {
      question: "Who was Jon Snow's mother?",
      answers: [
         "Cersei Lannister",
         "Cayteln Tully",
         "Lyanna Stark",
         "Elia Martell"
      ],
        
    },
    {
      question: "Done"
    }
  ];


//timer

var second = 10000;

var timeInterval = setInterval(countdown, 1000)

function countdown(){
  second--;
  var newTime = second
  timerElement.innerHTML = `${newTime}`
  if(second === 0){
    location.href = "./result.html"
    clearInterval(timeInterval)
    
    
  }else if(second < 0){
    location.href = "./result.html"
  }
 
}

//Question
questionElement.innerHTML = myQuestions[questionIndex].question

btn1Element.innerHTML = myQuestions[questionIndex].answers[0]
btn2Element.innerHTML = myQuestions[questionIndex].answers[1]
btn3Element.innerHTML = myQuestions[questionIndex].answers[2]
btn4Element.innerHTML = myQuestions[questionIndex].answers[3]

//Eventlistner
btn1Element.addEventListener('click', () => {
  questionIndex++
  console.log('hello world')
  questionElement.innerHTML = myQuestions[questionIndex].question

  btn1Element.innerHTML = myQuestions[questionIndex].answers[0]
  btn2Element.innerHTML = myQuestions[questionIndex].answers[1]
  btn3Element.innerHTML = myQuestions[questionIndex].answers[2]
  btn4Element.innerHTML = myQuestions[questionIndex].answers[3]
  second-=5
  if(questionIndex > 2){
    window.location.href = "./result.html"
  }
})
btn2Element.addEventListener('click', () => {
  questionIndex++
  console.log('hello world')
  if(questionIndex >= 3){
    window.location.href = "./result.html"
    
  }

  questionElement.innerHTML = myQuestions[questionIndex].question

  btn1Element.innerHTML = myQuestions[questionIndex].answers[0]
  btn2Element.innerHTML = myQuestions[questionIndex].answers[1]
  btn3Element.innerHTML = myQuestions[questionIndex].answers[2]
  btn4Element.innerHTML = myQuestions[questionIndex].answers[3]
  second-=5
  
})

btn3Element.addEventListener('click', () => {
  questionIndex++
  console.log('hello world')
  questionElement.innerHTML = myQuestions[questionIndex].question

  btn1Element.innerHTML = myQuestions[questionIndex].answers[0]
  btn2Element.innerHTML = myQuestions[questionIndex].answers[1]
  btn3Element.innerHTML = myQuestions[questionIndex].answers[2]
  btn4Element.innerHTML = myQuestions[questionIndex].answers[3]
  score++
  if(questionIndex >= 3){
    window.location.href = "./result.html"
    
  }
})

btn4Element.addEventListener('click', () => {
  questionIndex++
  console.log('hello world')
  questionElement.innerHTML = myQuestions[questionIndex].question

  btn1Element.innerHTML = myQuestions[questionIndex].answers[0]
  btn2Element.innerHTML = myQuestions[questionIndex].answers[1]
  btn3Element.innerHTML = myQuestions[questionIndex].answers[2]
  btn4Element.innerHTML = myQuestions[questionIndex].answers[3]
  second-=5
  if(questionIndex >= 3){
    window.location.href = "./result.html"
    
  }

})


//next question function


//End page
function scoreDisplay(){
  
  questionElement.innerHTML = "Score: " + score
  console.log('hi')
}

//if time end








  
    





