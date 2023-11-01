import { quizPack } from "./q&a.js";

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
let properAnswer = quizPack[0].answer;