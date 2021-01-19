var startButton = document.querySelector('.startButton');

// Make box for timer
var clock = document.querySelector('.timer')
var secondsLeft = 60;

// Make box for question
var question = document.querySelector('.questionBox');

// Make divs for answer choices
var answerChoice1 = document.querySelector("#choice1");
var answerChoice2 = document.querySelector("#choice2");
var answerChoice3 = document.querySelector("#choice3");
var answerChoice4 = document.querySelector("#choice4");

var scoreBoard = document.querySelector(".scoreBoard");
var score = 0;

var correctAnswers = ["6", "Box that wraps around every HTML element", "Document Object Model", "2", "A string stores a series of characters"];

var questionsArray = [
    {
        question: "What is a string?",
        answer: ["A string stores a series of characters", "A string can only contain numbers", "A string is enclosed with {}", "A string is encolsed with ()"]
    }, {
        question: "How many different values can a Boolean have?",  
        answer: ["2", "4", "7", "infinte"]
    }, {
        question: "What does DOM stand for?",
        answer: ["Document Object Model", "Document Objective Model", "Delivery Of Methods", "Data Object Model"]
    }, {
        question: "The box model is a...",
        answer: ["Box that wraps around every HTML element", "Box that only contains padding properties", "Box that only contains border properties", "Box that only contains margin properties"]
    }, {
        question: "How many data types are there in JavaScript?",
        answer: ["6", "7", "8", "9"]
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
        score++;
        differentQuestions();
        console.log(score);
        scoreBoard.textContent = score;
    } else {
        score--;
    };
};
// // make 3 wrong answers for each question? 

function differentQuestions () {
var randomNumber = Math.ceil(Math.random()*5);
    if (randomNumber === 1) {
        question.innerHTML = questionsArray[0].question;
        for (i=0; i < questionsArray[0].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
        }
    } else if (randomNumber === 2) {
        question.innerHTML = questionsArray[1].question;
        for (i=0; i < questionsArray[1].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[1].answer[i];
        }
    } else if (randomNumber === 3) {
        question.innerHTML = questionsArray[2].question;
        for (i=0; i < questionsArray[2].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[2].answer[i];
        }
    } else if (randomNumber === 4) {
        question.innerHTML = questionsArray[3].question;
        for (i=0; i < questionsArray[3].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[3].answer[i];
        }
    } else if (randomNumber === 5) {
        question.innerHTML = questionsArray[4].question;
        for (i=0; i < questionsArray[4].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[4].answer[i];
        }
    };
};

// pass each questionsArray[0].answer[i], ..Array[1].. through answerLog in startbtn
function answerLog(questionsArray) {
    for (var i = 0; i < questionsArray.length; i++) {
        document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
        console.log(document.querySelector("#choice" + (i + 1).toString()));
    }
};

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
    scoreBoard.textContent = score;
    differentQuestions();
    setTime();
    score = 0;
});
// Score board
// function updateScore () {


// Questions will appear in the same order everytime quiz is restarted
// Answer choices will be randomized each time quiz is generated
