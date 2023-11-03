import { quizPack } from "./q&a.js";

const questionContainer = document.getElementById('question-container');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');

const questions = quizPack.length;
let score = 0;
let properAnswer = '';
let index = 0;
let answer = false;

const getQuizPack = (currentPack) => {
  answer = false;
  questionContainer.innerText = currentPack.question;
  A.innerText = `A. ${currentPack.A}`;
  B.innerText = `B. ${currentPack.B}`;
  C.innerText = `C. ${currentPack.C}`;
  D.innerText = `D. ${currentPack.D}`;
  properAnswer = currentPack.answer;
  clearAnswers();
}

getQuizPack(quizPack[index]);

const clearAnswers = () => {
  A.classList.remove('proper-answer');
  A.classList.remove('wrong-answer');
  B.classList.remove('proper-answer');
  B.classList.remove('wrong-answer');
  C.classList.remove('proper-answer');
  C.classList.remove('wrong-answer');
  D.classList.remove('proper-answer');
  D.classList.remove('wrong-answer');
}

A.addEventListener('click', () => {
  const currentAnswer = 'A';
  if(!answer) {
    if(currentAnswer === properAnswer) {
      A.classList.add('proper-answer');
      score++;
    } else {
      A.classList.add('wrong-answer');
    }
    answer = true;
  }
});
B.addEventListener('click', () => {
  const currentAnswer = 'B';
  if(!answer) {
    if(currentAnswer === properAnswer) {
      B.classList.add('proper-answer');
      score++;
    } else {
      B.classList.add('wrong-answer');
    }
    answer = true;
  }
});
C.addEventListener('click', () => {
  const currentAnswer = 'C';
  if(!answer) {
    if(currentAnswer === properAnswer) {
      C.classList.add('proper-answer');
      score++;
    } else {
      C.classList.add('wrong-answer');
    }
    answer = true;
  }
});
D.addEventListener('click', () => {
  const currentAnswer = 'D';
  if(!answer) {
    if(currentAnswer === properAnswer) {
      D.classList.add('proper-answer');
      score++;
    } else {
      D.classList.add('wrong-answer');
    }
    answer = true;
  }
});

const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');
nextButton.addEventListener('click', () => {
  if(answer === true) {
    if(index < questions - 1) {
      index++;
      getQuizPack(quizPack[index]);
    } else {
      questionContainer.innerText = '';
      let h2 = document.createElement('h2');
      h2.innerText = `Score: ${score}/${questions}`
      questionContainer.appendChild(h2);
      nextButton.classList.toggle('hidden');
      resetButton.classList.toggle('hidden');
    }
  }
});

resetButton.addEventListener('click', () => {
  index = 0;
  score = 0;
  nextButton.classList.toggle('hidden');
  resetButton.classList.toggle('hidden');
  getQuizPack(quizPack[index]);
});