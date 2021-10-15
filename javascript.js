//Elements
var timerElement = document.getElementById('timer')
var questionElement = document.getElementById('question')
var btn1Element = document.getElementById('btn1')
var btn2Element = document.getElementById('btn2')
var btn3Element = document.getElementById('btn3')
var btn4Element = document.getElementById('btn4')
var answerBtnElement = document.getElementById('answer-btn')
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

var second = 6;

var timeInterval = setInterval(countdown, 1000)

function countdown(){
  second--;
  var newTime = second
  timerElement.innerHTML = `${newTime}`
  if(second === 0){
    clearInterval(timeInterval)
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
    var ArrayValue = 0
    var newArrayValue = ArrayValue+1
    console.log(newArrayValue)
    questionElement.innerHTML = myQuestions[newArrayValue].question
    btn1Element.innerHTML = myQuestions[newArrayValue].answers[0]
    btn2Element.innerHTML = myQuestions[newArrayValue].answers[1]
    btn3Element.innerHTML = myQuestions[newArrayValue].answers[2]
    btn4Element.innerHTML = myQuestions[newArrayValue].answers[3]
  }
})

btn2Element.addEventListener('click', function(){  
  if('click'){
    var ArrayValue = 0
    var newArrayValue = ArrayValue+1
    console.log(newArrayValue)
    questionElement.innerHTML = myQuestions[newArrayValue].question
    btn1Element.innerHTML = myQuestions[newArrayValue].answers[0]
    btn2Element.innerHTML = myQuestions[newArrayValue].answers[1]
    btn3Element.innerHTML = myQuestions[newArrayValue].answers[2]
    btn4Element.innerHTML = myQuestions[newArrayValue].answers[3]
  }
})

btn3Element.addEventListener('click', function(){  
  if('click'){
    var ArrayValue = 0
    var newArrayValue = ArrayValue+1
    console.log(newArrayValue)
    questionElement.innerHTML = myQuestions[newArrayValue].question
    btn1Element.innerHTML = myQuestions[newArrayValue].answers[0]
    btn2Element.innerHTML = myQuestions[newArrayValue].answers[1]
    btn3Element.innerHTML = myQuestions[newArrayValue].answers[2]
    btn4Element.innerHTML = myQuestions[newArrayValue].answers[3]
  }
})

btn4Element.addEventListener('click', function(){  
  if('click'){
    var ArrayValue = 0
    var newArrayValue = ArrayValue+1
    console.log(newArrayValue)
    questionElement.innerHTML = myQuestions[newArrayValue].question
    btn1Element.innerHTML = myQuestions[newArrayValue].answers[0]
    btn2Element.innerHTML = myQuestions[newArrayValue].answers[1]
    btn3Element.innerHTML = myQuestions[newArrayValue].answers[2]
    btn4Element.innerHTML = myQuestions[newArrayValue].answers[3]
  }
})

//new Question


  
    





