var startButton = document.querySelector('.startButton');

// Make box for timer
var clock = document.querySelector('.timer')
var secondsLeft = 20;

// Make box for question
var question = document.createElement('div');
question.id = 'questionBox'

// Make divs for answer choices
var answerChoice1 = document.createElement('div');
answerChoice1.id = 'choice1';
var answerChoice2 = document.createElement('div');
answerChoice2.id = 'choice2';
var answerChoice3 = document.createElement('div');
answerChoice3.id = 'choice3';
var answerChoice4 = document.createElement('div');
answerChoice4.id = 'choice4';

//Make questions:
// How do I make it not go to a previous question?
function differentQuestions () {
    randomNumber = Math.ceil(Math.random()*5);
    if (randomNumber === 1) {
        question.innerHTML = "this is the first question";
        document.body.appendChild(question);
    } else if (randomNumber === 2) {
        question.innerHTML = "this is the second question";
        document.body.appendChild(question);
    } else if (randomNumber === 3) {
        question.innerHTML = "this is the third question";
        document.body.appendChild(question);
    } else if (randomNumber === 4) {
        question.innerHTML = "this is the fourth question";
        document.body.appendChild(question);
    } else if (randomNumber === 5) {
        question.innerHTML = "this is the fifth question";
        document.body.appendChild(question);
    }
};

// Make timer
function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        clock.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            // Stop quiz
            alert("Game over");
        }
    }, 1000)
};

// Declare send message function

// Check answer function
// function checkAnswer () {
//     var userClick = 
//     if (userClick === rightAnswer) {
//         return nextQuestion;
//     if (randomNumber === 1 && userClick === // insert number assigned to correct answer//)
//     };
// };


startButton.addEventListener("click", function () {
// Call on timer function
setTime();
differentQuestions();
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

    // I'm not sure about the other one or not //


});

// Questions will appear in the same order everytime quiz is restarted
// Answer choices will be randomized each time quiz is generated
