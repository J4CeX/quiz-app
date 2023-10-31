const quizPack = [
  {
    question: `In 1768, Captain James Cook set out to explore which ocean?`,
    A: `Pacific Ocean`,
    B: `Atlantic Ocean`,
    C: `Indian Ocean`,
    D: `Arctic Ocean`,
    answer: 'A'
  }
]

let currentPack = quizPack[0];

const questionContainer = document.getElementById('question-container');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');

questionContainer.innerText = currentPack.question;
A.innerText = `A. ${currentPack.A}`;
B.innerText = `B. ${currentPack.B}`;
C.innerText = `C. ${currentPack.C}`;
D.innerText = `D. ${currentPack.D}`;