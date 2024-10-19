const questions = [
  {
    question: "How do we call click event in javascript?",
    options: ["onscrool", "onhover", "onchange", "onclick"],
    answer: 3,
  },
  {
    question: "In below what are in build browser events?",
    options: ["alert", "makecall", "inputs", "dom"],
    answer: 0,
  },
  {
    question: "What is not an atrribute of HTML element?",
    options: ["class", "id", "div", "href"],
    answer: 2,
  },
];
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  showQuestions(currentQuestionIndex);
}

function showQuestions(index) {
  const question = questions[index];
  questionElement.textContent = question.question;
  optionElement.innerHTML = "";
  question.options.map((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      selectAnswer(index, question.answer);
    });
    optionElement.appendChild(button);
  });
  nextButton.classList.add("hide");
}

function selectAnswer(selectedIdx, correctAnsIdx) {
  const optionButtons = optionElement.querySelectorAll("button");
  optionButtons.forEach((button, idx) => {
    if (idx === correctAnsIdx) {
      button.classList.add("correct-ans");
    } else if (idx === selectedIdx) {
      button.classList.add("wrong-ans");
    }
    button.disabled = true;
  });
  if (selectedIdx === correctAnsIdx) {
    score++;
  }

  nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions(currentQuestionIndex);
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.classList.add("hide");
  optionElement.classList.add("hide");
  nextButton.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.textContent = `You Scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  startQuiz();
}

startQuiz();
