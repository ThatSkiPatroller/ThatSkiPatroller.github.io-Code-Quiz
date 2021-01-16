var startButton = document.querySelector('.startButton');

// Make box for timer
var clock = document.querySelector('.timer')
var secondsLeft = 20;

// Make box for question
var question = document.querySelector('.questionBox');

// Make divs for answer choices
var answerChoice1 = document.querySelector("#choice1");
var answerChoice2 = document.querySelector("#choice2");
var answerChoice3 = document.querySelector("#choice3");
var answerChoice4 = document.querySelector("#choice4");

var correctAnswers = 0;
// var answerChoice1 = document.createElement('div');
// answerChoice1.id = 'choice1';
// var answerChoice2 = document.createElement('div');
// answerChoice2.id = 'choice2';
// var answerChoice3 = document.createElement('div');
// answerChoice3.id = 'choice3';
// var answerChoice4 = document.createElement('div');
// answerChoice4.id = 'choice4';

//Make questions:
// How do I make it not go to a previous question

 var questionsArray = [
     {
         question: "What is a string?",
         answer: ["A string stores a series of characters", "5", "4", "3"]
     }, {
         question: "How many different values can a Boolean have?",  
         answer: ["2", "six", "seven", "eight"]
     }, {
         question: "What does DOM stand for?",
         answer: ["Document Object Model", "2", "3", "4"]
     }, {
         question: "The box model is a...",
         answer: ["Box that wraps around every HTML element", "3", "4", "5"]
     }, {
         question: "How many data types are there in JavaScript?",
         answer: ["6", "hello", "no", "wrong"]
     }
];

// ^ questionsArray.forEach()

answerChoice1.addEventListener("click", checkAnswer);
answerChoice2.addEventListener("click", checkAnswer);
answerChoice3.addEventListener("click", checkAnswer);
answerChoice4.addEventListener("click", checkAnswer);

function checkAnswer (event) {
    event.target.textContent 
    if (correctAnswers.includes(event.target.textContent)) {
        correctAnswers++
    } else {

    };
};
// make 3 wrong answers for each question? 

var correctAnswers = ["6", "Box that wraps around every HTML element", "Document Object Model", "2", "A string stores a series of characters"];


function differentQuestions () {
var randomNumber = Math.ceil(Math.random()*5);
    if (randomNumber === 1) {
        question.innerHTML = questionsArray[0].question;
        for (i=0; i < questionsArray[0].answer.length; i++) {
            console.log("hello");
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
            console.log(document.querySelector("#choice" + (i + 1).toString()));
        }
    } else if (randomNumber === 2) {
        question.innerHTML = questionsArray[1].question;
    } else if (randomNumber === 3) {
        question.innerHTML = questionsArray[2].question;
    } else if (randomNumber === 4) {
        question.innerHTML = questionsArray[3].question;
    } else if (randomNumber === 5) {
        question.innerHTML = questionsArray[4].question;
    };
};
// pass each questionsArray[0].answer[i], ..Array[1].. through answerLog in startbtn
function answerLog(questionsArray) {
    for (var i = 0; i < questionsArray.length; i++) {
        document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
        console.log(document.querySelector("#choice" + (i + 1).toString()));
    }
}

// Make timer
function setTime () {
    clock.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
    secondsLeft--;
    clock.textContent = secondsLeft;
    if(secondsLeft === 0) {
        // Stop quiz
        console.log(secondsLeft);
        clearInterval(timerInterval);
    }
}, 1000)
};

startButton.addEventListener("click", function () {
    // Call on timer function
    // ** reset timer before calling timer**
    differentQuestions();
    setTime();

// Score board
// function updateScore () {

// };
// Declare send message function

// Check answer function
// function checkAnswer () {
//     var userClick = 
//     if (userClick === rightAnswer) {
//         return nextQuestion;
//     if (randomNumber === 1 && userClick === // insert number assigned to correct answer//)
//     };
// };
// answerChoice1.addEventListener("click", answerChoices);

// function answerChoices () {
//     if (differentQuestions(randomNumber === 1)) {
//         answerChoice1.innerHTML = "Answer Choice 1 for 1";
//         answerChoice2.innerHTML = "Answer Choice 2 for 1";
//         answerChoice3.innerHTML = "Answer Choice 3 for 1";
//         answerChoice4.innerHTML = "Answer Choice 4 for 1";
//         document.body.appendChild(question);
//         document.body.appendChild(answerChoice1);
//         document.body.appendChild(answerChoice2);
//         document.body.appendChild(answerChoice3);
//         document.body.appendChild(answerChoice4); 
//     } else if (randomNumber === 2) {
//         answerChoice1.innerHTML = "Answer Choice 1 for 2";
//         answerChoice2.innerHTML = "Answer Choice 2 for 2";
//         answerChoice3.innerHTML = "Answer Choice 3 for 2";
//         answerChoice4.innerHTML = "Answer Choice 4 for 2";
//         document.body.appendChild(question);
//         document.body.appendChild(answerChoice1);
//         document.body.appendChild(answerChoice2);
//         document.body.appendChild(answerChoice3);
//         document.body.appendChild(answerChoice4); 
//     } else if (randomNumber === 3) {
//         answerChoice1.innerHTML = "Answer Choice 1 for 3";
//         answerChoice2.innerHTML = "Answer Choice 2 for 3";
//         answerChoice3.innerHTML = "Answer Choice 3 for 3";
//         answerChoice4.innerHTML = "Answer Choice 4 for 3";
//         document.body.appendChild(question);
//         document.body.appendChild(answerChoice1);
//         document.body.appendChild(answerChoice2);
//         document.body.appendChild(answerChoice3);
//         document.body.appendChild(answerChoice4); 
//     } else if (randomNumber === 4) {
//         answerChoice1.innerHTML = "Answer Choice 1 for 4";
//         answerChoice2.innerHTML = "Answer Choice 2 for 4";
//         answerChoice3.innerHTML = "Answer Choice 3 for 4";
//         answerChoice4.innerHTML = "Answer Choice 4 for 4";
//         document.body.appendChild(question);
//         document.body.appendChild(answerChoice1);
//         document.body.appendChild(answerChoice2);
//         document.body.appendChild(answerChoice3);
//         document.body.appendChild(answerChoice4); 
//     } else if (randomNumber === 5) {
//         answerChoice1.innerHTML = "Answer Choice 1 for 5";
//         answerChoice2.innerHTML = "Answer Choice 2 for 5";
//         answerChoice3.innerHTML = "Answer Choice 3 for 5";
//         answerChoice4.innerHTML = "Answer Choice 4 for 5";
//         document.body.appendChild(question);
//         document.body.appendChild(answerChoice1);
//         document.body.appendChild(answerChoice2);
//         document.body.appendChild(answerChoice3);
//         document.body.appendChild(answerChoice4); 
//     };
// Upon clicking the start button, needs to show 5 divs (question, choice1, choice2, choice3, choice4)
    // question.innerHTML = "hello world";
    // answerChoice1.innerHTML = "sup";
    // answerChoice2.innerHTML = "not much fam";
    // answerChoice3.innerHTML = "thats coo";
    // answerChoice4.innerHTML = "oof";

    // document.body.appendChild(question);
    // document.body.appendChild(answerChoice1);
    // document.body.appendChild(answerChoice2);
    // document.body.appendChild(answerChoice3);
    // document.body.appendChild(answerChoice4); 
});

// Questions will appear in the same order everytime quiz is restarted
// Answer choices will be randomized each time quiz is generated
