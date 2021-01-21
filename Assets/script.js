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
// answerLog();

answerChoice1.addEventListener("click", checkAnswer);
answerChoice2.addEventListener("click", checkAnswer);
answerChoice3.addEventListener("click", checkAnswer);
answerChoice4.addEventListener("click", checkAnswer);

function checkAnswer (event) {
    event.target.textContent 
    if (correctAnswers.includes(event.target.textContent)) {
        score++;
        differentQuestions();
        highScoreLog();
        scoreBoard.textContent = score;
    } else {
        secondsLeft -= 15;
        score--;
        scoreBoard.textContent = score;
    };
};
// // make 3 wrong answers for each question? 


function differentQuestions () {
var randomNumber = Math.ceil(Math.random()*5);
var anotherRandomNumber = Math.ceil(Math.random()*4);
var alreadyAsked1 = false;
var alreadyAsked2 = false;
var alreadyAsked3 = false;
var alreadyAsked4 = false;
var alreadyAsked5 = false;
var generatorCounter = 0;
console.log(generatorCounter);

    if (randomNumber === 1 && alreadyAsked1 == false) {
        question.innerHTML = questionsArray[0].question;
        alreadyAsked1 = true;
        generatorCounter++;
        console.log(generatorCounter);
        for (i=0; i < questionsArray[0].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
        }
    } else if (randomNumber === 2 && alreadyAsked2 == false) {
        question.innerHTML = questionsArray[1].question;
        alreadyAsked2 = true;
        generatorCounter++;
        console.log(generatorCounter);
        for (i=0; i < questionsArray[1].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[1].answer[i];
        }
    } else if (randomNumber === 3 && alreadyAsked3 == false) {
        question.innerHTML = questionsArray[2].question;
        alreadyAsked3 = true;
        generatorCounter++;
        console.log(generatorCounter);
        for (i=0; i < questionsArray[2].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[2].answer[i];
        }
    } else if (randomNumber === 4 && alreadyAsked4 == false) {
        question.innerHTML = questionsArray[3].question;
        alreadyAsked4 = true;
        generatorCounter++;
        console.log(generatorCounter);
        for (i=0; i < questionsArray[3].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[3].answer[i];
        }
    } else if (randomNumber === 5 && alreadyAsked5 == false) {
        question.innerHTML = questionsArray[4].question;
        alreadyAsked5 = true;
        generatorCounter++;
        console.log(generatorCounter);
        for (i=0; i < questionsArray[4].answer.length; i++) {
            document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[4].answer[i];
        }
    } else if (generatorCounter == 5) {

        console.log("game over");
    }
};

// pass each questionsArray[0].answer[i], ..Array[1].. through answerLog in startbtn
// before there was answerLog(questionsArray)
// function answerLog() {
//     for (var i = 0; i < questionsArray[0].answer.length; i++) {
//         document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[0].answer[i];
//         answerChoice1.addEventListener("click", function {
//             if (randomNumber == 1 && )
//         });
//         console.log(document.querySelector("#choice" + (i + 1).toString()));
//     } for (var i = 0; i < questionsArray.length; i++) {
//         document.querySelector("#choice" + (i + 1).toString()).textContent = questionsArray[1].answer[i];
//         console.log(document.querySelector("#choice" + (i + 1).toString()));
//     }
// };

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

function highScoreLog () {
var highscore = localStorage.getItem("highscore");
if (highscore != null && score > highscore) {
    localStorage.setItem("highscore", score)
} else {
    localStorage.setItem("highscore", score)
}
// if (differentQuestions)
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

