//Scroll back to top of page
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*QUIZ PROGRAM*/

/*Quiz questions + answers*/
const questions = [
  {
    question: "pink sanrio character?",
    answers: [
      { text: "my melo", correct: true},
      { text: "kuromi", correct: false},
      { text: "pochacco", correct: false},
      { text: "korai", correct: false},
    ]
  },
  {
    question: "pink sanrio character?",
    answers: [
      { text: "my melo", correct: true},
      { text: "kuromi", correct: false},
      { text: "pochacco", correct: false},
      { text: "korai", correct: false},
    ]
  },
  {
    question: "pink sanrio character?",
    answers: [
      { text: "my melo", correct: true},
      { text: "kuromi", correct: false},
      { text: "pochacco", correct: false},
      { text: "korai", correct: false},
    ]
  }
  
];

/*Adding variables for elements (IDs)*/
const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

/*Question no. + score*/
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion (){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = ")none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();