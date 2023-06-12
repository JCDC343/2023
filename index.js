//Scroll back to top of page
// Get the button
let btpButton = document.getElementById("btp-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btpButton.style.display = "block";
  } else {
    btpButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log("button pressed");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*QUIZ PROGRAM*/

/*Quiz questions + answers*/
const questions = [
  {
    question: "What flower is the “Sakura?”",
    answers: [
      { text: "Sunflower", correct: false},
      { text: "Cherry blossom", correct: true},
      { text: "Daisy", correct: false},
      { text: "Peony", correct: false},
    ]
  },
  {
    question: "Why do customers slurp their noodles loudly in restaurants and cafes?",
    answers: [
      { text: "To be rude", correct: false},
      { text: "To make sure they get all the soup flavour", correct: false},
      { text: "To let the chef know the noodles are delicious", correct: true},
      { text: "To compete with other customers on who can slurp the loudest", correct: false},
    ]
  },
  {
    question: "What does the red circle on the Japanese flag represent?",
    answers: [
      { text: "The sun", correct: true},
      { text: "The Japanese army", correct: false},
      { text: "The red Komodo Dragon", correct: false},
      { text: "A tomato", correct: false},
    ]
  },
  {
    question: "What is the Japanese dish “Okayo-don” made up of?",
    answers: [
      { text: "Deep-fried pork cutlet on rice", correct: false},
      { text: "Boiled beef on rice", correct: false},
      { text: "Chicken and egg on rice", correct: true},
      { text: "Sweet flower jelly", correct: false},
    ]
  },
  {
    question: "What does the name Japan mean?",
    answers: [
      { text: "Land of the great wall", correct: false},
      { text: "Land of the rising sun", correct: true},
      { text: "The place near the ocean", correct: false},
      { text: "The beautiful flower field", correct: false},
    ]
  },
  {
    question: "The most important crop grown in Japan is .. ?",
    answers: [
      { text: "Beef", correct: false},
      { text: "Corn", correct: false},
      { text: "Rice", correct: true},
      { text: "Wheat", correct: false},
    ]
  },
  {
    question: "The national sport in Japan is .. ?",
    answers: [
      { text: "Basketball", correct: false},
      { text: "Sumo", correct: true},
      { text: "Volleyball", correct: false},
      { text: "Badminton", correct: false},
    ]
  },
  {
    question: "What is sanrio?",
    answers: [
      { text: "A Japanese restaurant", correct: false},
      { text: "A Japanese piano brand", correct: false},
      { text: "A Japanese toy manufacturer", correct: false},
      { text: "A Japanese kawaii character company", correct: true},
    ]
  },
  {
    question: "What is the Japanese word for tea ceremony?",
    answers: [
      { text: "Sado", correct: true},
      { text: "Mako", correct: false},
      { text: "Kado", correct: false},
      { text: "Saju", correct: false},
    ]
  },
  {
    question: "You have been invited to have dinner at your Japanese colleague’s house. Which of the following should you bring?",
    answers: [
      { text: "A wrapped gift", correct: true},
      { text: "Flowers", correct: false},
      { text: "A friend", correct: false},
      { text: "A bottle of wine", correct: false},
    ]
  },
  {
    question: "What animal represents the Japanese word “Kitsune”?",
    answers: [
      { text: "Fox", correct: true},
      { text: "Sheep", correct: false},
      { text: "Tiger", correct: false},
      { text: "Komodo dragon", correct: false},
    ]
  },
  {
    question: "How do Japanese people show politeness when greeting each other?",
    answers: [
      { text: "By handshaking", correct: false},
      { text: "By high fiving", correct: false},
      { text: "By spinning in a circle", correct: false},
      { text: "By bowing", correct: true},
    ]
  },
  {
    question: "What does the Japanese word “Kokorozuke” mean?",
    answers: [
      { text: "Baking with love", correct: false},
      { text: "Giving tips", correct: true},
      { text: "Caring for the elderly", correct: false},
      { text: "Singing loudly", correct: false},
    ]
  },
  {
    question: "What do couples in Japan usually avoid doing in public?",
    answers: [
      { text: "Hugging and kissing", correct: true},
      { text: "Being seen visiting a friend’s home together", correct: false},
      { text: "Holding hands", correct: false},
      { text: "Purchasing sanitary products together", correct: false},
    ]
  },
  {
    question: "What occassion is Christmas similar to in Japan?",
    answers: [
      { text: "Halloween", correct: false},
      { text: "Valentines Day", correct: true},
      { text: "New years", correct: false},
      { text: "St. Patricks Day", correct: false},
    ]
  },
  {
    question: "To be respectful and polite, in what position should you rest your chopsticks while eating?",
    answers: [
      { text: "Stuck in the food ", correct: false},
      { text: "Horizontally on the table", correct: true},
      { text: "One chopstick on either side of the dish", correct: false},
      { text: "In a cross over the dish", correct: false},
    ]
  },
  {
    question: "What is considered poor manners in Japan?",
    answers: [
      { text: "Eating with your hands", correct: false},
      { text: "Refilling other’s drinks", correct: false},
      { text: "Slurping", correct: false},
      { text: "Eating or drinking while walking", correct: true},
    ]
  },
  {
    question: "What is a “bonsai”?",
    answers: [
      { text: "A Japanese drink", correct: false},
      { text: "A Japanese mini tree", correct: true},
      { text: "A Japanese soldier", correct: false},
      { text: "A Japanese religion", correct: false},
    ]
  },
  {
    question: "What the the famous mountain in Japan called?",
    answers: [
      { text: "Mount Faju", correct: false},
      { text: "Mount Fuji", correct: true},
      { text: "Mount Foji", correct: false},
      { text: "Mount Fiju", correct: false},
    ]
  },
  {
    question: "What is the Japanese national anthem called?",
    answers: [
      { text: "Seijo", correct: false},
      { text: "Kimigayo", correct: true},
      { text: "Igen", correct: false},
      { text: "Utsukushii", correct: false},
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

/*Start quiz*/
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

/*Show question*/
function showQuestion (){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;
/*Check if answer is correct or incorrect*/
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

/*Reset question - removing visible question components to display next question components*/
function resetState(){
  nextButton.style.display = ")none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/*User selects an answer*/
function selectAnswer(e){
  /*Hides next button until user selects an answer*/
  document.getElementById("next-btn").style.display = "block";
  document.getElementById("next-btn").style.visibility = "visible";
  /*Searches program to see if user selected answer is correct*/
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  /*Displays next button once program shows user if their answer was correct (green) or incorrect (red)*/
  nextButton.style.display = "block";
}

/*Shows score to user at the end of quiz*/
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  document.getElementById("next-btn").style.display = "block";
  document.getElementById("next-btn").style.visibility = "visible";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

/*Determines what clicking the next button will do depending on what stage the program is running at*/
function handleNextButton(){
  document.getElementById("next-btn").style.visibility = "hidden";
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

/*Determines if clicking the next button will run "handleNextButton" code or restart quiz again*/
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

/*Starts quiz - quiz program code runs again from the start*/
startQuiz();

//TEST!//
//function hello(){//
 // Swal.fire('Any fool can use a computer')

 function hello(){
  Swal.fire('Any fool can use a computer');
}

